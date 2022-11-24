// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js" 
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp96QfuA3qu-nfFYaskp-HYQoKimH8uYU",
  authDomain: "fir-app-tuto-d012d.firebaseapp.com",
  projectId: "fir-app-tuto-d012d",
  storageBucket: "fir-app-tuto-d012d.appspot.com",
  messagingSenderId: "367784430615",
  appId: "1:367784430615:web:81b888b4a28c2f4c1ea052"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)