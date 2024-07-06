// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs108goaHAKZ_IzUUeLF8P02hstmnQs9U",
  authDomain: "tienda-app-redux.firebaseapp.com",
  projectId: "tienda-app-redux",
  storageBucket: "tienda-app-redux.appspot.com",
  messagingSenderId: "938934268830",
  appId: "1:938934268830:web:b68e7c5b3d89cd219e1c8f",
  measurementId: "G-KN13YFDBM9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)