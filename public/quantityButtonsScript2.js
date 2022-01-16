
const quantityButton = document.querySelectorAll(".btn-number");
var checkoutBadge    = document.querySelector(".checkoutBadge");
var checkoutBadgeValue   = parseInt(checkoutBadge.innerText);

 for (let i = 0; i < quantityButton.length; i++) {
     quantityButton[i].addEventListener("click", function()
     {
       console.log("clicked");
     var productName = quantityButton[i].getAttribute("name");
     var productQuantityInput = document.querySelector("#"+productName);
     var currentQuantityValue = productQuantityInput.value;
     var buttonType = quantityButton[i].getAttribute("data-type");
    //  var productPrice = parseInt(document.querySelector("#"+productName+"Price").innerText);
     var checkoutBadge = document.querySelector(".checkoutBadge");

     if (buttonType == 'minus')
       {
         if(parseInt(productQuantityInput.value) > 0)
         {
           productQuantityInput.value = parseInt(currentQuantityValue)-1;
        //    document.querySelector("#"+productName+"TotalCost").innerText = (productQuantityInput.value)*productPrice;

           checkoutBadgeValue = checkoutBadgeValue-1;
           console.log(checkoutBadgeValue);
           document.querySelector(".checkoutBadge").innerText = checkoutBadgeValue;
         }
       }
     else if (buttonType == 'plus')
       {
         if(parseInt(productQuantityInput.value) < 100)
         {
           productQuantityInput.value = parseInt(productQuantityInput.value)+1;
        //    document.querySelector("#"+productName+"TotalCost").innerText = (productQuantityInput.value)*productPrice;

        checkoutBadgeValue = checkoutBadgeValue+1;
        console.log(checkoutBadgeValue);
        document.querySelector(".checkoutBadge").innerText = checkoutBadgeValue;
      }
       }
    });
 }
  
