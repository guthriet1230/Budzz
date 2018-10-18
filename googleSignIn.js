//LUIS, HERE IS THE FIREBASE SCRIPT TO ADD!
//<script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>

console.log("hello")
//////
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNO-ehgQSWvmRHrWcfLcmkOOUr9IaQ83U",
    authDomain: "budzz-b509d.firebaseapp.com",
    databaseURL: "https://budzz-b509d.firebaseio.com",
    projectId: "budzz-b509d",
    storageBucket: "budzz-b509d.appspot.com",
    messagingSenderId: "114148428551"
  };

 firebase.initializeApp(config);


//////////

console.log(firebase);
 var provider = new firebase.auth.GoogleAuthProvider();

 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

 firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...

    console.log(result);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    console.log(error);
    // ...
  });

