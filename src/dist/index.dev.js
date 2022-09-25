"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js");

var _firebaseAnalytics = require("https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js");

var _firebaseAuth = require("https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js");

//import { initializeApp } from "D:\Study\Mini Project\react-firebase-authentication-main\Final\node_modules/firebase/app";
//import { getAnalytics } from "D:\Study\Mini Project\react-firebase-authentication-main\Final\node_modulesfirebase/analytics";
var firebaseConfig = {
  apiKey: "AIzaSyAIx5K05JcvPmOhalbB5oP2Zed05tSDlj8",
  authDomain: "webapp-9e1c8.firebaseapp.com",
  databaseURL: "https://webapp-9e1c8-default-rtdb.firebaseio.com",
  projectId: "webapp-9e1c8",
  storageBucket: "webapp-9e1c8.appspot.com",
  messagingSenderId: "636035984805",
  appId: "1:636035984805:web:f6667daa13d134bc550c4c",
  measurementId: "G-R9291TDLQV"
}; // Initialize Firebase

var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var analytics = (0, _firebaseAnalytics.getAnalytics)(app);
var auth = (0, _firebaseAuth.getAuth)(app); // Create User

(0, _firebaseAuth.createUserWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
  // Signed in 
  var user = userCredential.user; // ...
})["catch"](function (error) {
  var errorCode = error.code;
  var errorMessage = error.message; // ..
}); // Lgoin

(0, _firebaseAuth.signInWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
  // Signed in 
  var user = userCredential.user; // ...
})["catch"](function (error) {
  var errorCode = error.code;
  var errorMessage = error.message;
}); // Dont Know

(0, _firebaseAuth.onAuthStateChanged)(auth, function (user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid; // ...
  } else {// User is signed out
      // ...
    }
});