import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBdIL0F-DoPvXbPdC6YjRNgxn8HNRujf4o",
    authDomain: "curso-c017b.firebaseapp.com",
    projectId: "curso-c017b",
    storageBucket: "curso-c017b.appspot.com",
    messagingSenderId: "959603093761",
    appId: "1:959603093761:web:00389dc8aad4d57c1b2b00",
    measurementId: "G-6F8999VR4J"
  };

  const fireBase = initializeApp(firebaseConfig);

  const db = getFirestore(fireBase);
  const auth = getAuth(fireBase);

  export { db, auth};