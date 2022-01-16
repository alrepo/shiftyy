

  console.log("inside the authorised sendClientOrder.js");

  // Unique ID Generator...
  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
  let supplierID = document.getElementById("supplierID").innerText;
  // let supplierID = localStorage.getItem("supplierID");
  let clientOrder = {};
  let inputQuantitiesCollection = [];
  let clientRequestedProducts = [];
  let clientName = "";
  let clientPhone = "";
  let clientBookingDateAndTime = "";
  let clientAddress = "";
  let clientAddressCoordinates = [];
  let supplierTarget = "";
  
  var submittedOrder ={};
  var y = 0;
  
  // console.log(document.querySelectorAll("input-number").length);
  // document.querySelectorAll("input-number").forEach(checkBoxesCollection)
  
  // function checkBoxesCollection(item)
  // {
  //   console.log("pushed");
  //   inputQuantitiesCollection.push(item);
  // }
  // for(i=1;i<=inputQuantitiesCollection.length;i++)
  // {
  //   var pdctNumber = "#pdct"+i
  //   document.querySelector(pdctNumber).addEventListener('change', function()
  //   {
  //     let pdct = "#pdct"+(this.id);
  //     if (pdct > 0)
  //       {
  //         clientRequestedProducts.push(document.querySelector(pdct).textContent+" ");
  //         console.log(document.querySelector(pdct).textContent+"  is added to array");
  //         console.log(clientRequestedProducts+" ARE REQUESTED");
  //       }
  //     else
  //       {
  //         let indexOfProduct = clientRequestedProducts.indexOf(document.querySelector(pdct).textContent+" ");
  //         clientRequestedProducts.splice(indexOfProduct,1);
  //         console.log(document.querySelector(pdct).textContent+"  is removed from array");
  //         console.log(clientRequestedProducts);
  //       }
  //   });
  // }
        // Date/Time, Name and Phone inputs validation code

        // Start "Add Products to Modal" Code //
        var orderArrayFiltered = [];
        var updatedOrdersArray = [];
        function openBasket()
        {
            let totalToPay = 0;

            console.log("reviewOrder clicked");
            console.log(" so, order array is: ");
            console.log(order);
            // orderArrayFiltered = order.filter(el => {
            //   return el != null && el != '';
            // }); 
            // orderArrayFiltered.forEach(pushToUpdatedOrdersArray);

            // function pushToUpdatedOrdersArray(item)
            // {
            //   if (!updatedOrdersArray.includes(item))
            //   {
            //     updatedOrdersArray.push(item);
            //   }
            // }

            console.log("Order is...");
            console.log(order );
            console.log("Order length is...");
            console.log(order.length);
            document.querySelector("tbody").innerHTML = "<tr id='appendProductsFromHere'> </tr>";
            
            for (var i=0; i<order.length; i++)
             {
                if (order[i] != null)
               {
                // let removeButton = document.createElement("button");
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td7 = document.createElement("td");
                var td5 = document.createElement("td");

                let button = document.createElement("button");

                button.type = 'button';
                button.style.padding = "0";
                button.style.borderColor = "transparent";
                button.style.borderWidth = "0"; 
                button.style.borderRadius = "50%";
                button.style.fontSize = "20px";
                button.id = "removeProductButton";
                button.style.backgroundColor = "rgb(236, 79, 79)";
                button.style.width = "25px";
                button.style.height = "25px";
                button.style.alignContent = "center"; 
                button.style.right = "0";
                button.style.display = "inline-flex";
                button.style.marginLeft = "auto";
                button.style.flexDirection = "column";
                button.style.justifyContent = "center";
                button.style.marginLeft = "10px";
                button.style.alignItems = "center";
                button.innerHTML = "&times;";

                td1.style.textAlign = 'right';
                td1.style.border = "solid 1px black";
                td2.style.border = "solid 1px black";
                td3.style.border = "solid 1px black";
                td2.style.textAlign = 'center';
                td3.style.textAlign = 'center';
                td5.id = "totalToPay";
                td7.style.paddingRight = "5px";
                td7.style.boxShadow  = "none";
                td7.style.width = "1%";
                td7.style.padding = "0";
                td7.style.textAlign = "center";
                tr.style.border = "solid 1px black";

                td1.appendChild(button);
                td1.appendChild(document.createTextNode(order[i]["productName"]));
                td2.appendChild(document.createTextNode(order[i]["productQuantity"]));
                td2.appendChild(document.createTextNode(" "));
                td2.appendChild(document.createTextNode(order[i]["productUnit"].slice(2)));
                let orderQuantity = order[i]["productQuantity"];
                let roundedTotalPrice = (parseFloat(order[i]["productPrice"])*orderQuantity).toFixed(2);
                
                td3.appendChild(document.createTextNode(roundedTotalPrice));
                
                tr.style.fontSize = "14px";
                tr.style.minWidth = "100%";
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                // tr.appendChild(td7);
                totalToPay = totalToPay + parseFloat(order[i]["productPrice"])*orderQuantity;
                // td3.appendChild(removeButton);                
                // if (i == 0)
                // {
                //   tr.id = ("lastProductRow");
                // }
                
                  tr.id = order[i]["productNumber"];
                  if (i == 0)
                  {
                    tr.classList.add("lastProductRow");
                  }
                function removeProduct()
                {
                  console.log("tr is: ");
                  console.log(tr);
                  tr.classList.add("d-none");
                  console.log("order index is :");
                  order.forEach(removeFromBasket);

                  function removeFromBasket(item)
                  {
                    if (tr.id == item["productNumber"])
                    {
                      console.log("in 1");
                      console.log("order item to delete is: ");
                      console.log(item);
                      console.log("and its index is "+order.indexOf(item));
                      order.splice(order.indexOf(item),1);

                      console.log("order array length ="+order.length);
                      document.querySelector(".checkoutBadge").innerText = (order.length).toString();
            
                      return;
                    }
                    // else if (tr.id == "lastProductRow")
                    // {
                    //   console.log("in 2");
                    //   console.log("order item to delete is: ");
                    //   console.log(order[0]);
                    //   console.log("and its index is 0");
                    //   order.splice(0,1);
                    //   console.log("//////////////// DONE SPLICING! //////////////////////////");
                    //   return;
                    // }
                    
                  };
                  console.log(orderIndex);
                  
                  orderIndex -= 1;
                  // totalToPay = totalToPay + parseFloat(order[order]["productPrice"])*orderQuantity;
                  // console.log("totalToPay ="+totalToPay);
                  // document.getElementById("totalToPay").innerText = totalToPay.toFixed(2)+" ريال";
                  console.log("updated array is: ");
                  console.log(order);
                }

                function insertAfter(referenceNode, newNode)
                {
                 referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                }
                var appendingElement = document.getElementById("appendProductsFromHere")
                insertAfter(appendingElement,tr);
                document.getElementById("removeProductButton").addEventListener('click',removeProduct);
              }
          }
              let td4 = document.createElement("td");
              let td6 = document.createElement("td");
              let tr2 = document.createElement("tr");
              let span = document.createElement("span");
              let totalTitle = document.createTextNode("المجموع");
              // totalTitle.style.textAlign = "center";

              td4.style.textAlign = "center";
              td4.style.border = "solid 1px black";
              td4.style.fontWeight = "900";
              td5.style.textAlign = "center";
              td5.style.borderBottom = "solid 1px black";
              td5.style.fontWeight = "900";
              td6.style.borderBottom = "solid 1px black";
              td6.style.borderLeft = "solid 1px black";
              span.innerText = " شامل الضريبة";
              span.style.fontSize = "10px";
              

              td4.appendChild(totalTitle);
              td5.appendChild(document.createTextNode(totalToPay.toFixed(2)+" ريال"));
              td5.appendChild(span);
              tr2.appendChild(td4);
              tr2.appendChild(td5);
              tr2.appendChild(td6);

              function insertAfter(referenceNode, newNode)
              {
               referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
              }
              var appendingElement = document.querySelector(".lastProductRow");
              insertAfter(appendingElement,tr2);     

      };
      // End "Add Products to Modal" Code //

        var nameIsValid = false;
        var phoneIsValid = false;
        var DateAndTimeAreValid = false;
  
        // date/time validation...
        document.getElementById("datetime-picker").addEventListener('change', function()
        {
          clientBookingDateAndTime  = document.getElementById("datetime-picker").value;
          if (clientBookingDateAndTime != "")
            {
              console.log(clientBookingDateAndTime);
              document.getElementById("required3").classList.add("d-none");
              document.getElementById("required33").classList.remove("d-none");
              DateAndTimeAreValid = true;
            }
          else
            {
              document.getElementById("required3").classList.remove("d-none");
              document.getElementById("required33").classList.add("d-none");
              DateAndTimeAreValid = false;
            }
        });
        
        
  
        // name input validation...
        document.getElementById("nameInput").addEventListener('input', function(){
          if (document.getElementById("nameInput").value != "")
            {
              document.getElementById("required1").classList.add("d-none");
              document.getElementById("required11").classList.remove("d-none");
              nameIsValid = true;
              console.log(nameIsValid);
            }
          else
            {
              document.getElementById("required1").classList.remove("d-none");
              document.getElementById("required11").classList.add("d-none");
              nameIsValid = false;
            }
        });
  
        // phone input validation...
        document.getElementById("phoneInput").addEventListener('input', function(){
          let enteredPhone = document.getElementById("phoneInput").value;
          let arabicRegexFormat = /^[+]*[(]{0,1}[\u0030-\u0039\u0660-\u0669]{1,3}[)]{0,1}[\./\u0030-\u0039\u0660-\u0669]*$/g;
          let englishRegexFormat = /^[+]*[(]{0,1}[\u0030-\u0039\u0660-\u0669]{1,3}[)]{0,1}[\./\u0030-\u0039\u0660-\u0669]*$/g;
             
              console.log(phoneIsValid);
  
              // check phone if  input number contains non-number characters  
                  if ((enteredPhone.match(arabicRegexFormat) || enteredPhone.match(englishRegexFormat)) && enteredPhone != "")
                  {
                    console.log("valid phone format");
                    document.getElementById("required2").classList.add("d-none");
                    document.getElementById("required22").classList.remove("d-none");
                    document.getElementById("required222").classList.add("d-none");
                    phoneIsValid = true;
                  }
                  else
                  {
                    if (!enteredPhone.match(arabicRegexFormat) || !enteredPhone.match(englishRegexFormat))
                    {
                      document.getElementById("required2").classList.remove("d-none");
                      document.getElementById("required22").classList.add("d-none");
                      document.getElementById("required222").classList.add("d-none");
                    }
                    if (enteredPhone != "")
                    {
                      console.log("invalid phone number format");
                      document.getElementById("required2").classList.add("d-none");
                      document.getElementById("required22").classList.add("d-none");
                      document.getElementById("required222").classList.remove("d-none");
                    }
                    phoneIsValid = false;                  
                  }
        });
    document.querySelector("#bookingButton").addEventListener("click", function()
      {
        if (nameIsValid && phoneIsValid && DateAndTimeAreValid)
        {
          let clientID = uuidv4();
  
          clientName = document.querySelector("#nameInput").value;
          clientPhone = document.querySelector("#phoneInput").value;
          clientBookingDateAndTime = document.getElementById("datetime-picker").value;
          clientAddress = document.getElementById("addressText").innerText;
          clientAddressCoordinates[0] = lat;
          clientAddressCoordinates[1] = lng;
          clientManuallyEnteredAddress = document.getElementById("manuallyEnteredAddress").value;

          for (var i =0; i<= order.length; i++)
              {
                if (order[i] != null )
                {
                  submittedOrder[y] = order[i];
                  y = y+1;
                }
              }
            clientOrder ={clientID:clientID, supplierID:supplierID, clientName:clientName, clientPhone:clientPhone, clientBookingDateAndTime:clientBookingDateAndTime, clientAddress:clientAddress, clientAddressCoordinates:clientAddressCoordinates, clientRequestedProducts:submittedOrder, clientManuallyEnteredAddress:clientManuallyEnteredAddress};
          
          let supplierProfile = {};
  
          let key = clientID;
          let newClient = {};
          newClient[key]= clientOrder;
          let clients = {clients:newClient};
  
          // var dbRef = db.collection('suppliers').doc('Supplier Profiles').set({
          //   [supplierID] : clients
          // }, { merge: true });
          var clientRef = db.collection('clients').doc(supplierID).set({
            [clientID] : clientOrder
          }, {merge: true });
          submittedOrder = {};
          y = 0;
          // Alert Message Code
          // Swal.fire(
          //   'تم الحجز بنجاح!',
          //   '',
          //   'success'
          // )
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'تم الإرسال بنجاح',
            showConfirmButton: false,
            timer: 1800
          })
  
          setTimeout(function(){window.location.replace("/authorised/market")}, 1800);
          
          // var setWithMerge = cityRef.set({
          //     capital: true
          // }, { merge: true });
        }
      else
        {
          if (!DateAndTimeAreValid)
          {
            document.getElementById("required3").classList.remove("d-none");
            console.log("date/time are NOT VALID!");
          }
          if (!nameIsValid)
          {
            document.getElementById("required1").classList.remove("d-none");
            console.log("name is NOT VALID!");
          }
          if (!phoneIsValid)
          {
            document.getElementById("required2").classList.remove("d-none");
            document.getElementById("required222").classList.add("d-none");
            console.log("phone is NOT VALID!");
          }
        }
    }
  );
  
  
    // var clientContactInfo = {name:"King Salman Road", phone:0138990000}
    // var clientRequestedProducts1 = {clientRequests, clientBooking, clientContactInfo}
    //
    // var clientRequests = {request1:"King Abdullah Road", request2:0138994243}
    // var clientBooking = {date:"King Salman Road", time:0138990000}
    // var clientContactInfo = {name:"King Salman Road", phone:0138990000}
    // var clientRequestedProducts2 = {clientRequests, clientBooking, clientContactInfo}
    // var  clients= {clientRequestedProducts1, clientRequestedProducts2}
  
  
  
