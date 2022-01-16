document.getElementById("logoutButton").addEventListener('click', logOutOfPage);

function logOutOfPage()
{
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    localStorage.clear();
    console.log("Signe-out successful");
    // window.location.href = "../index";
    window.location.replace("../index");

  }).catch((error) => {
    // An error happened.
    alert("Error during  logging  out!");
  });
}
