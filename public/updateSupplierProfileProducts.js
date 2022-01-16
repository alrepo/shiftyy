
exports.updateProfile = updateProfile;

let productDescription = "";
let productPrice = "";

let isEmpty = false; // to be checked later...

function updateProfile(supplierProducts)
{  
  let productText = ""
  if(Object.keys(supplierProducts).length > 0)
  {
    for (i=1; i<=Object.keys(supplierProducts).length; i++)
    {
      productText = supplierProducts["product"+i]["product"+i+"Description"];
      productPrice = supplierProducts["product"+i]["product"+i+"Price"];
      addNewProduct(productText,productPrice,i)
    }
  }
  else
  {
    productText = null;
    productPrice = null;
    addNewProduct(productText,productPrice,1)
  }

  // if (supplierProfileImageSrc == "images/barberAvatar.png" && firebase.auth().currentUser != null)
  // {
  //   document.getElementById("supplierImage").src = "../"+supplierProfileImageSrc;
  // }
  // else{
  //   document.getElementById("supplierImage").src = supplierProfileImageSrc;
  // }

  function addNewProduct(productText,productPrice,i)
  {
  //////////
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let label1 = document.createElement("label");
  let input1 = document.createElement("input");
  let addProductButton = document.createElement("button");
  /////////////

 if (productText != null)
 {
    productDescriptionText = document.createTextNode(" "+productText);
    productPriceText = document.createTextNode(" "+productPrice);
 }
 else
 { 
    productDescriptionText = document.createTextNode("لايوجد خدمات حالياً");
    productPriceText = document.createTextNode(" ");
    input1.style.display = "none";
    div3.style.display = "none";
    label1.style.textAlign= "center";
 }

    
    productDescriptionText.id  = "productDescritioncheckbox"+i;
    div1.id = "productsOneRowDescription"
    div1.className = "d-flex justify-content-end align-items-center col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto"
    div2.className = "nameWraper ml-auto col-xs-10 col-sm-10 col-md-10 col-lg-10"
    input1.type = "checkbox"
    input1.className = "checkboxInput"
    input1.style.width = "50px !important;";
    input1.id = "checkbox"+i;
    input1.name = "product"+i;
    label1.className = "productCheckbox";
    label1.id = "labelcheckbox"+i
    label1.style.marginRight = "10px";
    label1.for = "product"+i;
    label1.style.fontSize = "20px";
    label1.appendChild(productDescriptionText);
    span1.className = "productNameBox";
    div3.className = "productPriceBox col-xs-2 col-sm-2 col-md-2 col-lg-2";
    span1.className = "startingFrom";
    span1.innerText = "تبدأ من";
    span2.className = "productPrice";
    span2.appendChild(productPriceText);
    addProductButton.classList.add("pt-3 pb-3 pl-5 pr-5");
    addProductButton.style.backgroundColor = "#fff";
    addProductButton.style.color = "blue";
    addProductButton.innerText = "إضافة";

    div1.appendChild(div2);
    div1.appendChild(div3);
    div2.appendChild(input1);
    div2.appendChild(label1);
    div3.appendChild(span1);
    div3.appendChild(span2);
    div3.appendChild(addProductButton);
  
    function insertAfter(referenceNode, newNode)
    {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  
    var appendingElement = document.getElementById("startAppendingFromHere")
    insertAfter(appendingElement,div1)
  
  }
}
