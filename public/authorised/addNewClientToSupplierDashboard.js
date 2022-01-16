console.log("Inside clients JS")

let clientDictionaryLength = 0;
let supplierClients = localStorage.getItem("supplierClients");
let clientsIsEmpty = localStorage.getItem("clientsIsEmpty");
let supplierID = localStorage.getItem("supplierID");
document.querySelector("tbody").id = supplierID;
//clients
let parsedSupplierClients = []

if (clientsIsEmpty == "false"){
  parsedSupplierClients = JSON.parse(supplierClients);
  console.log("clients dictionary length is: "+(Object.keys(parsedSupplierClients).length));
}

let clientText = ""
let j = 0;

// for (var key in parsedSupplierClients)
// {
//   j = j+1;
//   clientText = parsedSupplierClients[key]
//   // console.log(clientText);
//   let clientName = clientText["clientName"];
//   let clientPhone = clientText["clientPhone"];
//   let clientBookedProducts = clientText["clientRequestedProducts"];

//   // console.log("client name is: "+clientName);
//   // console.log("client phone is: "+clientPhone);
//   // console.log("client rquested products are: "+clientBookedProducts);
//   console.log("client name:  "+clientName+"client phone: "+clientPhone+"client booked: "+clientBookedProducts);
//   addNewClient(clientName, clientPhone, clientBookedProducts);
// }

// db.collection("suppliers").doc("Supplier Profiles").onSnapshot((doc) => {
//     console.log("Current data: ", doc.data());
// });
///////////////////////////////
 db.collection("suppliers").doc("Supplier Profiles")
   .onSnapshot((doc) => {
      let data = doc.data();
       for (var key in data)
       {
         if (data[key]["supplierID"] == firebase.auth().currentUser.uid)
         {
         }
       }
  });
/////////////////////// Sart Real-time database listener ////////////////////////
const loader = document.querySelector(".smallLoadingAnimation");
loader.classList.remove("hidden");

db.collection("clients").onSnapshot((snapshot) => {
    let changes  = snapshot.docChanges();
    if (changes == "")
    {
      loader.classList.add("hidden");
      loader.classList.add("d-none");
    }
    
    console.log(snapshot);

    changes.forEach(change => {
    let  changeType = change.type; 
    let data = change.doc.data();

    if(Object.keys(data).length == 0 || data[supplierID] == null )
    {
      loader.classList.add("hidden");
      loader.classList.add("d-none"); 
    }
      if((changeType == "modified" || changeType == "added"))
      {
        // if (document.querySelectorAll(".newClientRow").length > 0)
        //     {
        //       document.querySelectorAll(".newClientRow").forEach(function(item){
            
        //         item.classList.add("d-none");
            
        //       });
        //     }
       
        let counter = 0;
        for (var key in data)
        {
          if (counter == 0 && data[key]["supplierID"] == firebase.auth().currentUser.uid)
          {
            document.getElementById((data[key]["supplierID"])).innerHTML = "<tr id='startAppendingClientsFromHere'></tr>";
            counter = 1;
          }
          if((data[key]["supplierID"] == firebase.auth().currentUser.uid))
          {
            let clientID = data[key]["clientID"];
            console.log(clientID);
            let supplierID = data[key]["supplierID"];
            let clientName = data[key]["clientName"];
            let clientBookingDateAndTime = data[key]["clientBookingDateAndTime"];
            let clientPhone =  data[key]["clientPhone"];
            let clientBookedProducts = data[key]["clientRequestedProducts"];
            let clientAddressCoordinates = data[key]['clientAddressCoordinates'];
            let clientManuallyEnteredAddress = data[key]['clientManuallyEnteredAddress'];

            console.log(supplierID);
            console.log(clientName);
            console.log(clientBookingDateAndTime);
            console.log(clientPhone);
            console.log(clientBookedProducts);
            console.log(clientID);
            addNewClient(clientName, clientBookingDateAndTime, clientPhone, clientBookedProducts, clientID, clientAddressCoordinates, clientManuallyEnteredAddress);
            console.log(data[key]);
          }
         
        }

      }
  })
}, (error) => {
  console.log("error getting data");
});
////////////////////// End of Real-time database listener ///////////////////////

function addNewClient(clientName, clientBookingDateAndTime, clientPhone, clientBookedProducts, clientID, clientAddressCoordinates, clientManuallyEnteredAddress)
{
loader.classList.add("hidden");
loader.classList.add("d-none");

let tr = document.createElement("tr");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let mapWrapper = document.createElement('div');
let mapOpenInGoogleMaps = document.createElement("a");

let i = 1;

if (i<=20)
{

let removeButton = document.createElement("button");
let mapBlock = document.createElement("a");

removeButton.type = 'button';
removeButton.style.display = "flex";
removeButton.style.padding = "0";
removeButton.style.borderColor = "transparent";
removeButton.style.borderWidth = "0"; 
removeButton.style.borderRadius = "50%";
removeButton.style.fontSize = "25px";
removeButton.id = "removeClientButton";
removeButton.style.backgroundColor = "rgb(236, 79, 79)";
removeButton.style.width = "35px";
removeButton.style.height = "35px";
removeButton.style.alignContent = "center";
removeButton.style.position="relative";
removeButton.style.right = "0";
removeButton.style.justifyContent = "center";
removeButton.style.alignItems = "center";
removeButton.innerHTML = "&times;";
// var br = document.createElement("BR");
mapBlock.style.height = '150px';
mapBlock.style.width = '150px';
mapBlock.style.marginLeft = "auto";
mapBlock.style.marginRight = "auto";
mapBlock.id = 'mapHolder';
mapOpenInGoogleMaps.innerText = "فتح في خرائط قووقل"
mapOpenInGoogleMaps.style.backgroundColor = "#A2DBFA";
// mapOpenInGoogleMaps.style.backgroundColor = "";
let lat = clientAddressCoordinates[0];
let lng = clientAddressCoordinates[1];
mapOpenInGoogleMaps.href = 'https://www.google.com/maps?q='+lat+','+lng+'&'+'z=17'+'&hl=ar';

td3.dir = "rtl";
let orderArray = []
td3.appendChild(document.createElement("hr"));
for(j in clientBookedProducts)
{ 
  let productQuantity = document.createTextNode(clientBookedProducts[j]["productQuantity"]);
  let productUnit = document.createTextNode(clientBookedProducts[j]["productUnit"].slice(2));
  let productName = document.createTextNode(clientBookedProducts[j]["productName"]);

  td3.appendChild(document.createTextNode(" "));
  td3.appendChild(productQuantity);
  td3.appendChild(document.createTextNode(" "));
  td3.appendChild(productUnit);
  td3.appendChild(document.createTextNode(" "));
  td3.appendChild(productName);

  td3.appendChild(document.createElement("hr"));
// orderArray.push(("\n"+(parseInt(j)+1))+"- "+clientBookedProducts[j]["productName"]+" ("+clientBookedProducts[j]["productQuantity"]+" X "+clientBookedProducts[j]["productUnit"]+")")
}

td4.style.textAlign = 'center';
td5.style.boxShadow  = "none";
td5.style.width = "1%";
td5.style.padding = "0";
td4.style.textAlign = "center";
mapBlock.style.display = 'block';
// td4.style.display = 'flex';
td4.style.justifyContent = 'center';

tr.classList.add("newClientRow");

// td3.innerText = orderArray;
td5.appendChild(removeButton);

mapWrapper.appendChild(document.createTextNode(clientName));
mapWrapper.appendChild(document.createElement("BR"));
mapWrapper.appendChild(document.createTextNode(clientPhone));
mapWrapper.appendChild(document.createElement("BR"));
mapWrapper.appendChild(document.createTextNode("مطلوب في: "+clientBookingDateAndTime));
mapWrapper.appendChild(document.createElement("BR"));
mapWrapper.appendChild(document.createTextNode(clientManuallyEnteredAddress));
mapWrapper.appendChild(mapBlock);
mapWrapper.appendChild(document.createElement("BR"));
mapWrapper.appendChild(mapOpenInGoogleMaps);

// Start Creating the Map Button 

var latlng = new google.maps.LatLng(lat, lng);

var myOptions={
center:latlng,zoom:17,
mapTypeId:google.maps.MapTypeId.ROADMAP,
mapTypeControl:false,
navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
};
var map=new google.maps.Map(mapBlock,myOptions);
var marker=new google.maps.Marker({position:latlng,map:map,title:"أنت هنا"});
// End Creating the Map Button

td4.appendChild(mapWrapper);
tr.appendChild(td4);
tr.appendChild(td3);
tr.appendChild(td5);

function insertAfter(referenceNode, newNode)
{
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var appendingElement = document.getElementById("startAppendingClientsFromHere")
insertAfter(appendingElement,tr);

i = i + 1;

}

document.getElementById("removeClientButton").addEventListener('click',function(){

let i = 1;
tr.classList.add("d-none");
tr.classList.remove("clientTableRow");
i = i-1;

// Remove client from the "clients" database...
var clientsRef = db.collection('clients').doc(supplierID).set({
[clientID] : {}
}, { merge: true });
});

}
