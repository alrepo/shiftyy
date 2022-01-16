 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDjsKQlqNRWOWD6Qw6tklqtP03BtUW_lqw",
    authDomain: "groceryapp-b381a.firebaseapp.com",
    databaseURL: "https://groceryapp-b381a.firebaseio.com",
    projectId: "groceryapp-b381a",
    storageBucket: "groceryapp-b381a.appspot.com",
    messagingSenderId: "1092044916930",
    appId: "1:1092044916930:web:b3493c5ddfdef83633d35b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();