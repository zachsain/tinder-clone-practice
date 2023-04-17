// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy0x1qyC_cYZ9pQpE1-E-ESwoln_vPDF8",
  authDomain: "tinder-clone-fbcbb.firebaseapp.com",
  projectId: "tinder-clone-fbcbb",
  storageBucket: "tinder-clone-fbcbb.appspot.com",
  messagingSenderId: "784555016657",
  appId: "1:784555016657:web:93ab78a8786d7c2bc160f0",
  measurementId: "G-5J8MCZP2XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);