// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtEmsLhe6sHfz9SAAxqjRfM47QM_SAsWU",
  authDomain: "signup-and-signin-6ba49.firebaseapp.com",
  projectId: "signup-and-signin-6ba49",
  storageBucket: "signup-and-signin-6ba49.firebasestorage.app",
  messagingSenderId: "614353990805",
  appId: "1:614353990805:web:7364517222db277d39579c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth (app)