// Get the modal
var modal = document.getElementById("productImageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
// img.onclick = modalFunction();
document.getElementById("restaurants_landing_page_1").addEventListener("click", modalFunction);
document.getElementById("restaurants_landing_page_2").addEventListener("click", modalFunction);
document.getElementById("restaurants_landing_page_11").addEventListener("click", modalFunction);
document.getElementById("restaurants_landing_page_22").addEventListener("click", modalFunction);

document.getElementById("suppliers_landing_page_1").addEventListener("click", modalFunction);
document.getElementById("suppliers_landing_page_2").addEventListener("click", modalFunction);
document.getElementById("suppliers_landing_page_11").addEventListener("click", modalFunction);
document.getElementById("suppliers_landing_page_22").addEventListener("click", modalFunction);

function modalFunction(){
  modal.style.display = "block";
  modalImg.src = this.src;
  console.log(modalImg.style.width);
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//////////////////////////////////////////////////////////////
// //Start landing page modal images
// let landing_page_img = document.querySelector(".img");

// var modal_landing= document.getElementById("productImageModal");
//       var modalImg = document.getElementById("modalImage");

//       function modalFunction(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//       }
//       var span = document.getElementsByClassName("close")[0];

//       // When the user clicks on <span> (x), close the modal
//       span.onclick = function() { 
//         modal_landing.style.display = "none";
//       }
// //End landing page modal images
