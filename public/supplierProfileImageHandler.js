
let supplierProfileImage = {};
document.getElementById("selectProfileImage").addEventListener('change',function(e){
    console.log(e);
    supplierProfileImage = e.target.files[0];
    console.log("image name "+supplierProfileImage);
})
document.getElementById("uploadProfileImage").addEventListener('click', function(){

    firebase.storage().ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').put(supplierProfileImage).
    then(function(){
        
        console.log("image uploaded successfully");

        //update profile image profile src in the supplier database...
        let newProfileImageSrc = ""
        firebase.storage().ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').getDownloadURL().then(imgUrl =>{
           newProfileImageSrc = imgUrl;
           updateProfileImage(newProfileImageSrc);
           localStorage.setItem("supplierProfileImage", imgUrl);
           });
    
            }).catch(error => {
            console.log(error.message);
            });
});

// below code to immediately show supplier profile image on the profile upon selection...
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#supplierProfileImage')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function updateProfileImage(newProfileImageSrc)
           {
            console.log(newProfileImageSrc);

            let supplierProfileImage = {"supplierProfileImage":newProfileImageSrc};
            db.collection('suppliers').doc('Supplier Profiles').set({
            [firebase.auth().currentUser.uid ]:supplierProfileImage

           },{ merge: true }).then(() => {
               console.log("Supplier added to database successfully written!");
           })
           .catch((error) => {
             console.error("Error adding supplier to database: ", error);
           });

           }