import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

//import { initializeApp } from "D:\Study\Mini Project\react-firebase-authentication-main\Final\node_modules/firebase/app";
//import { getAnalytics } from "D:\Study\Mini Project\react-firebase-authentication-main\Final\node_modulesfirebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIx5K05JcvPmOhalbB5oP2Zed05tSDlj8",
  authDomain: "webapp-9e1c8.firebaseapp.com",
  databaseURL: "https://webapp-9e1c8-default-rtdb.firebaseio.com",
  projectId: "webapp-9e1c8",
  storageBucket: "webapp-9e1c8.appspot.com",
  messagingSenderId: "636035984805",
  appId: "1:636035984805:web:f6667daa13d134bc550c4c",
  measurementId: "G-R9291TDLQV"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  // Create User
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  // Lgoin
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  // Dont Know
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});