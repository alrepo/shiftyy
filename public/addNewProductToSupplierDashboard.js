//////////////////////// START DATA FETCHING ///////////////////////////
const loader = document.querySelector(".smallLoadingAnimation");
loader.classList.remove("hidden");

var suppliers = db.collection("suppliers").doc("Supplier Profiles");

suppliers.get().then((doc) => {
    if (doc.exists) {
      let supplierProducts = [];
      var data = doc.data()
      for (var key in data)
      {
        if([key] == firebase.auth().currentUser.uid)
        {
          supplierProducts = data[key]["products"];
        }
       
      }
    updateProfileProducts(supplierProducts);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

document.getElementById("menuProductAddButton").addEventListener("click", addNewProduct);
document.getElementById("productCategory").addEventListener("change", getProductCategory);
document.getElementById("productPrice").addEventListener("change", getProductPrice);
document.getElementById("productName").addEventListener("change", getProductName);
document.getElementById("productQuantity").addEventListener("change", getProductQuantity);

function getProductName()
{
  var productName = document.getElementById("productName").value;
  return productName;
}

function getProductCategory()
{
  var selectedProductCategory = document.getElementById("productCategory");
  var productCategoryText = selectedProductCategory.options[selectedProductCategory.selectedIndex].text;

  return productCategoryText;
}
function getProductQuantity()
{
  var selectedProductQuantity = document.getElementById("productQuantity");
  var productQuantityText = selectedProductQuantity.options[selectedProductQuantity.selectedIndex].text;

  return productQuantityText;
}
function getProductPrice()
{
  document.getElementById("productPrice").style.borderStyle = "none";

  var productPrice = document.getElementById("productPrice").value;

  return productPrice;
}
function getProductImage()
{
  var productImage = document.getElementById("product_default_image").src;
  return productImage;
}
function updateProfileProducts(supplierProducts)
{
  loader.classList.add("hidden");
  loader.classList.add("d-none");

  // console.log(supplierProducts);
  // console.log(supplierProducts);
  console.log("fethcing Products...");
  let numberOfexistingProducts = Object.keys(supplierProducts).length;
  let existingproductName = "";
  let existingproductImage = "";
  let existingProductCategory= "";
  let existingproductQuantity = "";
  let existingproductPrice = "";

    ////////// Start translating product category from english to arabic /////////
    for (i=1; i<=numberOfexistingProducts; i++)
  {
    categoryEnglishName = supplierProducts["product"+i]["productCategory"];
    switch (categoryEnglishName)
    {
      case "meat" : existingProductCategory = "لحوم";
      break;
      case "coffeeTea" : existingProductCategory = "قهوة و شاي";
      break;
      case "plastics" : existingProductCategory = "مستلزمات بلاستيكية";
      break;
      case "fruit" : existingProductCategory = "خضروات و فواكة";
      break;
      case "baked" : existingProductCategory = "المخبوزات";
      break;
      case "spices" : existingProductCategory = "البهارات";
      break;
      case "frozen" : existingProductCategory = "المأكولات المبردة";
      break;
      case "drinks" : existingProductCategory = "المشروبات";
      break;
      case "tin-cans" : existingProductCategory = "المعلبات";
      break;
      default: existingProductCategory = "جميع الأصناف";
    }
    ////////// End translating product category from english to arabic /////////
      existingproductName = supplierProducts["product"+i]["productName"];
      existingproductImage = supplierProducts["product"+i]["productImage"];
      existingproductQuantity = supplierProducts["product"+i]["productQuantity"];
      existingproductPrice = supplierProducts["product"+i]["productPrice"];

      let tr = document.createElement("tr");
      let td1 = document.createElement("td"); //product Category
      let productImageIcon = document.createElement("img");
      let td2 = document.createElement("td"); //product Name & Image
      let td3 = document.createElement("td"); //product Quantity
      let td4 = document.createElement("td"); //productPrice
      let td5 = document.createElement("td"); //removeButton
      let button = document.createElement("button");

      button.type = 'button';
      button.style.padding = "0";
      button.style.borderColor = "transparent";
      button.style.borderWidth = "0"; 
      button.style.borderRadius = "50%";
      button.style.fontSize = "25px";
      button.id = "removeProductButton";
      button.style.backgroundColor = "rgb(236, 79, 79)";
      button.style.width = "35px";
      button.style.height = "35px";
      button.style.alignContent = "center";
      button.style.position="relative";
      button.style.right = "0";
      button.style.justifyContent = "center";
      button.style.display = "inline-flex";
      button.style.flexDirection = "column";
      button.style.justifyContent = "center";
      button.style.alignItems = "center";

      button.innerHTML =  "&times;";
      // td3.style.border = "none";
      // td3.style.borderRight = "solid 0.1px black";
      // td3.style.borderBottom = "solid 0.1px black";
      
      td1.style.paddingRight = "5px";
      td1.style.textAlign = "center";
      td2.style.paddingRight = "5px";
      td2.style.textAlign = "center";
      td3.style.paddingRight = "5px";
      td3.style.textAlign = "center";
      td4.style.paddingRight = "5px";
      td4.style.textAlign = "center";
      td5.style.paddingRight = "5px";
      td5.style.boxShadow  = "none";
      td5.style.width = "1%";
      td5.style.padding = "0";
      td5.style.textAlign = "center";

      // td3.style.border = "none !importanrt";
      // td3.style.borderRight = "solid 0.1px black";
      // td3.style.borderBottom = "solid 0.1px black";
      // td3.style.width = "1%";
      td2.appendChild(productImageIcon);
      td2.appendChild(document.createElement("BR"));
      td2.appendChild(document.createTextNode(existingproductName));
      td1.innerText = ""+existingProductCategory;
      td3.innerText = ""+existingproductQuantity;
      td4.innerText = ""+existingproductPrice;

      productImageIcon.src = existingproductImage;
      productImageIcon.id = existingproductImage;
      productImageIcon.classList.add("productImage");
      
      var modal = document.getElementById("productImageModal");
      var modalImg = document.getElementById("modalImage");
      productImageIcon.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      });
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
      }
      productImageIcon.style.height = "30px";
      productImageIcon.style.width = "30px";
      productImageIcon.style.cursor = "pointer";
      productImageIcon.style.transition = "0.3s";

      tr.classList.add("productTableRow");
      td1.classList.add("productCategory");
      td2.classList.add("productName");
      td3.classList.add("productQuantity");
      td4.classList.add("priceCell");
      td5.appendChild(button);

      tr.appendChild(td4);
      tr.appendChild(td3);
      tr.appendChild(td2);
      tr.appendChild(td1);
      tr.appendChild(td5);

      function removeProduct()
        {
          tr.classList.add("d-none");
          tr.classList.remove("productTableRow");
          // i = i-1;
          document.getElementById("saveSupplierProfileProducts").style.opacity = 1;
          document.getElementById("saveSupplierProfileProducts").style.borderStyle = "solid";
          document.getElementById("saveSupplierProfileProducts").style.borderWidth = "2px";
          document.getElementById("saveSupplierProfileProducts").style.borderColor = "red";
          document.getElementById("saveSupplierProfileProducts").classList.remove("disabled");
        }
      function insertAfter(referenceNode, newNode)
      {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }

      var appendingElement = document.getElementById("appendProductsAfterThisRow")
      insertAfter(appendingElement,tr);
      document.getElementById("removeProductButton").addEventListener('click',removeProduct);

  }
  // i = numberOfexistingProducts;
}

function addNewProduct()
{
  if(getProductName() != "" && getProductCategory() != "" && getProductQuantity() != "" && getProductPrice() != "")
  {
      document.getElementById("saveSupplierProfileProducts").classList.remove("disabled");
      document.getElementById("saveSupplierProfileProducts").style.removeProperty("opacity");
      document.getElementById("saveSupplierProfileProducts").style.borderStyle = "solid";
      document.getElementById("saveSupplierProfileProducts").style.borderWidth = "2px";
      document.getElementById("saveSupplierProfileProducts").style.borderColor = "red";

      let i = 1;

      if (i<=20)
      {
          let tr = document.createElement("tr");
          let productImageIcon = document.createElement("img");
          let td1 = document.createElement("td"); //removeButton
          let td2 = document.createElement("td"); //productName
          let td3 = document.createElement("td"); //productCategory
          let td4 = document.createElement("td"); //productQuantity
          let td5 = document.createElement("td"); //productPrice
          let button = document.createElement("button");

          button.type = 'button';
          button.style.padding = "0";
          button.style.borderColor = "transparent";
          button.style.borderWidth = "0"; 
          button.style.borderRadius = "50%";
          button.style.fontSize = "25px";
          button.id = "removeProductButton";
          button.style.backgroundColor = "rgb(236, 79, 79)";
          button.style.width = "35px";
          button.style.height = "35px";
          button.style.alignContent = "center"; 
          button.style.position="relative";
          button.style.right = "0";
          button.style.display = "inline-flex";
          button.style.flexDirection = "column";
          button.style.justifyContent = "center";
          button.style.alignItems = "center";

          button.innerHTML = "&times;";
          // td3.style.border = "none";
          // td3.style.borderRight = "solid 0.1px black";
          // td3.style.borderBottom = "solid 0.1px black";
          
          td1.style.paddingRight = "5px";
          td1.style.textAlign = "center";
          td2.style.paddingRight = "5px";
          td2.style.textAlign = "center";
          td3.style.paddingRight = "5px";
          td3.style.textAlign = "center";
          td4.style.paddingRight = "5px";
          td4.style.textAlign = "center";
          td5.style.paddingRight = "5px";
          td5.style.boxShadow  = "none";
          td5.style.width = "1%";
          td5.style.padding = "0";
          td5.style.textAlign = "center";

          // td3.style.border = "none !importanrt";
          // td3.style.borderRight = "solid 0.1px black";
          // td3.style.borderBottom = "solid 0.1px black";
          // td3.style.width = "1%";
          productImageIcon.src = getProductImage();
          productImageIcon.id = getProductImage();
          productImageIcon.classList.add("productImage");
          var modal = document.getElementById("productImageModal");
          var modalImg = document.getElementById("modalImage");
          productImageIcon.addEventListener('click', function(){
            modal.style.display = "block";
            modalImg.src = this.src;
          });
          var span = document.getElementsByClassName("close")[0];

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() { 
            modal.style.display = "none";
          }
          productImageIcon.style.height = "30px";
          productImageIcon.style.width = "30px";
          productImageIcon.style.cursor = "pointer";
          productImageIcon.style.transition = "0.3s";

          td2.appendChild(productImageIcon);
          td2.appendChild(document.createElement("BR"));
          td2.appendChild(document.createTextNode(getProductName()));
          td1.appendChild(document.createTextNode(getProductCategory()));
          td3.innerText = ""+getProductQuantity();
          td4.innerText = ""+getProductPrice();

          tr.classList.add("productTableRow");
          td2.classList.add("productName");
          td1.classList.add("productCategory");
          td3.classList.add("productQuantity");
          td4.classList.add("priceCell");

          td5.appendChild(button);
          tr.appendChild(td4);
          tr.appendChild(td3);
          tr.appendChild(td2);
          tr.appendChild(td1);
          tr.appendChild(td5);


          function removeProduct()
            {
              tr.classList.add("d-none");
              tr.classList.remove("productTableRow");
              i = i-1;
              document.getElementById("saveSupplierProfileProducts").style.borderStyle = "solid";
              document.getElementById("saveSupplierProfileProducts").style.borderWidth = "2px";
              document.getElementById("saveSupplierProfileProducts").style.borderColor = "red";
              document.getElementById("saveSupplierProfileProducts").style.opacity = 1;
              document.getElementById("saveSupplierProfileProducts").classList.remove("disabled");
            }
          function insertAfter(referenceNode, newNode)
          {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
          }

          var appendingElement = document.getElementById("appendProductsAfterThisRow")
          insertAfter(appendingElement,tr);

          i = i + 1;
      }
}
if(getProductName() == "")
{
  document.getElementById("productName").style.borderStyle = "solid";
  document.getElementById("productName").style.borderWidth = "2px";
  document.getElementById("productName").style.borderColor = "red";
}
else{
  document.getElementById("productName").style.borderStyle = "solid";
  document.getElementById("productName").style.borderWidth = "0.5px";
  document.getElementById("productName").style.borderColor = "grey";
}
if(getProductCategory() == "")
{
  document.getElementById("productCategory").style.borderStyle = "solid";
  document.getElementById("productCategory").style.borderWidth = "2px";
  document.getElementById("productCategory").style.borderColor = "red";
}
else{
  document.getElementById("productCategory").style.borderStyle = "solid";
  document.getElementById("productCategory").style.borderWidth = "0.5px";
  document.getElementById("productCategory").style.borderColor = "grey";
}
if(getProductQuantity() == "")
{
  document.getElementById("productQuantity").style.borderStyle = "solid";
  document.getElementById("productQuantity").style.borderWidth = "2px";
  document.getElementById("productQuantity").style.borderColor = "red";
}
else{
  document.getElementById("productQuantity").style.borderStyle = "solid";
  document.getElementById("productQuantity").style.borderWidth = "0.5px";
  document.getElementById("productQuantity").style.borderColor = "grey";
}
if(getProductPrice() == "")
{
  document.getElementById("productPrice").style.borderStyle = "solid";
  document.getElementById("productPrice").style.borderWidth = "2px";
  document.getElementById("productPrice").style.borderColor = "red";
}
else{
  document.getElementById("productPrice").style.borderStyle = "solid";
  document.getElementById("productPrice").style.borderWidth = "0.5px";
  document.getElementById("productPrice").style.borderColor = "grey";
}
    document.getElementById("removeProductButton").addEventListener('click',removeProduct);
}

////////////////// Start of Sending Products To Database //////////////

document.getElementById("saveSupplierProfileProducts").addEventListener("click", sendProductsToDatabase);

function sendProductsToDatabase()
{
  let productTableRowCollection = [];
  document.querySelectorAll(".productTableRow").forEach(appednToProductTableRowsCollection);
  let productData = {};
  let supplierCategories = ["allCategories"];
  let supplierProducts = {};
  let supplierProductsToDatabase = {};
  document.getElementById("product_default_image").src = "https://res.cloudinary.com/ddu27xuu5/image/upload/c_scale,h_150,w_150/v1629605205/products-Images/product_default_image_bnoeqo.svg";

  function appednToProductTableRowsCollection(item)
  {
    productTableRowCollection.push(item);
  }
  for(i=0;i<productTableRowCollection.length;i++)
  {
    // console.log(productTableRowCollection[i].querySelector(".productCategory").innerText)
    // console.log(productTableRowCollection[i].querySelector(".priceCell").innerText)
    // supplierproducts["product"+(i+1)] = productTableRowCollection[i].querySelector(".productCategory").innerText;
    productData["productName"] = productTableRowCollection[i].querySelector(".productName").innerText;
    productData["productImage"] = productTableRowCollection[i].querySelector(".productImage").src;
    productData["productQuantity"] = productTableRowCollection[i].querySelector(".productQuantity").innerText;
    
    // Start converting entered price number from Arabic/Persian/Urdu - if it was - to English
    function parseArabic(){
     var yas = productTableRowCollection[i].querySelector(".priceCell").innerText;
     yas = Number(yas.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
         return d.charCodeAt(0) - 1632;                
         }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) { return d.charCodeAt(0) - 1776; })
     );
        productData["productPrice"] = yas;
    }
      parseArabic();
    // End converting entered price number from Arabic/Persian/Urdu - if it was - to English

    ////////////// Start translating entered product category from Arabic to English before sending it to database //////////////
    var selectedArabicCategory = productTableRowCollection[i].querySelector(".productCategory").innerText;
    var selectedCategory = "";

    switch (selectedArabicCategory)
    {
      case "لحوم" : selectedCategory = "meat";
      break;
      case "قهوة و شاي" : selectedCategory = "coffeeTea";
      break;
      case "مستلزمات بلاستيكية" : selectedCategory = "plastics";
      break;
      case "خضروات و فواكة" : selectedCategory = "fruit";
      break;
      case "المخبوزات" : selectedCategory = "baked";
      break;
      case "البهارات" : selectedCategory = "spices";
      break;
      case "المأكولات المبردة" : selectedCategory = "frozen";
      break;
      case "المشروبات" : selectedCategory = "drinks";
      break;
      case "المعلبات" : selectedCategory = "tin-cans";
      break;
      default: selectedCategory = "allCategories";
    }
    productData["productCategory"] = selectedCategory;

    ////////////// End translating entered product category from Arabic to English before sending it to database //////////////
    console.log("products are..."+productData);
    supplierProducts["product"+(i+1)] = productData;
    if (!supplierCategories.includes(supplierProducts["product"+(i+1)]["productCategory"]))
    {
      supplierCategories.push(supplierProducts["product"+(i+1)]["productCategory"]);
    }
    productData = {};
  }
  console.log("produces are....");
  console.log(supplierProducts);
  console.log("categories are...");
  console.log(supplierCategories);

  supplierProductsToDatabase["products"] = supplierProducts;

    let supplierID = firebase.auth().currentUser.uid;
    console.log(supplierID);

    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'تم الحفظ',
      showConfirmButton: false,
      timer: 1000
    })
    document.getElementById("productName").value = "";
    document.getElementById("productCategory").selectedIndex = 0;
    document.getElementById("productQuantity").selectedIndex = 0;
    document.getElementById("productPrice").value = "";

    document.getElementById("productName").style.borderStyle = "none";
    document.getElementById("productCategory").style.borderStyle = "none";
    document.getElementById("productQuantity").style.borderStyle = "none";
    document.getElementById("productPrice").style.borderStyle = "none";
    
    document.getElementById("saveSupplierProfileProducts").style.borderStyle = "none";
    document.getElementById("saveSupplierProfileProducts").style.opacity = 0.5;
    document.getElementById("saveSupplierProfileProducts").classList.add("disabled");

    db.collection('suppliers').doc('Supplier Profiles').set({
      [supplierID] : {"products": null}
    }, { merge: true });
    db.collection('suppliers').doc('Supplier Profiles').set({
      [supplierID] : {"supplierCategory": null}
    }, { merge: true });

    db.collection('suppliers').doc('Supplier Profiles').set({
      [supplierID] : supplierProductsToDatabase
    }, { merge: true });
    db.collection('suppliers').doc('Supplier Profiles').set({
      [supplierID] : {"supplierCategory": supplierCategories}
    }, { merge: true });

}
////////////////// End of Sending Products To Database //////////////

// document.querySelector("#bookingButton").addEventListener("click", function()
//   {
//     console.log("button clicked");
//     clientName = document.querySelector("#clientName").value;
//     console.log("name: "+clientName);
//     clientPhone = document.querySelector("#clientPhone").value;
//     console.log("phone: "+clientPhone);
//     clientOrder ={clientName:clientName, clientPhone:clientPhone,clientRequestedProducts:clientRequestedProducts};
//     console.log(clientOrder);

//       let clientID = uuidv4();
//       let supplierProfile = {};

//       let key = clientID;
//       let newClient = {};
//       newClient[key]= clientOrder;
//       let clients = {clients:newClient};

//       var cityRef = db.collection('Suppliers').doc('Supplier Profiles').set({
//         [supplierID] : clients
//       }, { merge: true });

//       // var setWithMerge = cityRef.set({
//       //     capital: true
//       // }, { merge: true });

//   }
