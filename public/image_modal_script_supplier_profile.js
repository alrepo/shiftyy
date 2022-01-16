// Get the modal
var modal = document.getElementById("productImageModal");

// Get the image and insert it inside the modal
var img = document.querySelectorAll(".product_image").forEach(modalFunction);

var modalImg = document.getElementById("modalImage");
function modalFunction(element){
element.addEventListener("click",
function(){
  modal.style.display = "block";
  modalImg.src = this.src;
})
};
 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
