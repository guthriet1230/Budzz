// Initialize Firebase
console.log("hello");

$(document).ready(function(){
  
  var config = {
    apiKey: "AIzaSyDNO-ehgQSWvmRHrWcfLcmkOOUr9IaQ83U",
    authDomain: "budzz-b509d.firebaseapp.com",
    databaseURL: "https://budzz-b509d.firebaseio.com",
    projectId: "budzz-b509d",
    storageBucket: "budzz-b509d.appspot.com",
    messagingSenderId: "114148428551"
  };

  firebase.initializeApp(config);

  // var database = firebase.database();


////////////////////////////////////////////////////////////////////////////////////////////////////
// GOOGLE SIGN IN FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(firebase);
var provider = new firebase.auth.GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD PROFILE NAME
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log(result);
    console.log(result.user.displayName);
    console.log(user.email);

    $("#current-user").text(result.user.displayName);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD PROFILE IMAGE
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    var profImage = $("<img>");
    profImage.attr("src", result.user.photoURL);

    $("#profile-img").addClass("profile-img").append(profImage);
    $("#profile-img").style.width = "100px";
    console.log(user.photoURL);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // Errors
    ////////////////////////////////////////////////////////////////////////////////////////////////////
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // console.log(error);
    // ...
  });
})