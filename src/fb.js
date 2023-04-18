import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAy0x1qyC_cYZ9pQpE1-E-ESwoln_vPDF8",
    authDomain: "tinder-clone-fbcbb.firebaseapp.com",
    databaseURL: "https://tinder-clone-fbcbb-default-rtdb.firebaseio.com",
    projectId: "tinder-clone-fbcbb",
    storageBucket: "tinder-clone-fbcbb.appspot.com",
    messagingSenderId: "784555016657",
    appId: "1:784555016657:web:93ab78a8786d7c2bc160f0",
    measurementId: "G-5J8MCZP2XC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore();

  export default database 