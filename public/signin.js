

let emailIsValid = false;
let passwordIsValid = false;

document.getElementById("email").addEventListener('input', validateEmail);

function validateEmail()
  {
    document.getElementById("required2").innerText = "مطلوب";
    let enteredEmail = document.getElementById("email").value;
    let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (enteredEmail.match(emailFormat))
    {
      console.log("valid email format");
      document.getElementById("required1").classList.add("d-none");
      document.getElementById("required11").classList.remove("d-none");
      emailIsValid = true;
    }
    else
    {
      console.log("invalid email format");
      document.getElementById("required1").classList.remove("d-none");
      document.getElementById("required11").classList.add("d-none");
      emailIsValid = false;
    }
  }
document.getElementById("password").addEventListener('input', validatePassword);

function validatePassword()
  {
    if (document.getElementById("password").value.length >= 6)
    {
      document.getElementById("required2").classList.add("d-none");
      document.getElementById("required22").classList.remove("d-none");
      passwordIsValid = true;
    }
  else
    {
      document.getElementById("required2").classList.remove("d-none");
      document.getElementById("required22").classList.add("d-none");
      passwordIsValid = false;
    }
  }

document.addEventListener("keyup", function keyboardEnterEvent (e) {
  // Number 13 is the "Enter" key on the keyboard
  if (e.key === "Enter") {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    document.getElementById("signIn").click();
  }
});

document.getElementById("signIn").addEventListener('click', function(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if(email != "" && emailIsValid && password != "" && passwordIsValid)
  {
    document.querySelector(".spinnerWrapper").style.display = "flex";

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      localStorage.setItem("isNewUser", "false");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.querySelector(".spinnerWrapper").style.display = "none";

      if(errorMessage == "The email address is already in use by another account.")
      {
        document.getElementById("required1").innerText = "هذا البريد الإلكتروني مسجل بالفعل في الموقع";
        document.getElementById("required1").style.color  =  "red";
        document.getElementById("required1").style.fontSize  =  "14px";
        document.getElementById("required1").classList.remove("d-none");
        document.getElementById("required11").classList.add("d-none");
      }
      else
      {
        document.getElementById("required1").dir = "rtl";
        document.getElementById("required1").innerText = "الرجاء التأكد من البريد الإلكتروني أو كلمة السر" 
        document.getElementById("required1").style.color  =  "red";
        document.getElementById("required1").style.fontSize  =  "14px";
        document.getElementById("required1").classList.remove("d-none");
        document.getElementById("required11").classList.add("d-none");
      }
    });
  }

  if(!emailIsValid)
  {
    document.getElementById("required1").style.color = "red";
    validateEmail();
  }

  if(!passwordIsValid)
  {
    document.getElementById("required2").style.color = "red";
    validatePassword();
  }

});
