// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA4aQ_zHbgL0xBr7KZnI-e_k2M0a0wHCE",
  authDomain: "netflixgpt-1a476.firebaseapp.com",
  projectId: "netflixgpt-1a476",
  storageBucket: "netflixgpt-1a476.appspot.com",
  messagingSenderId: "1091982222861",
  appId: "1:1091982222861:web:119cab87cef33e379e9744",
  measurementId: "G-4XFRK142NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();