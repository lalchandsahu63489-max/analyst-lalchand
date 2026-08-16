// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgOf7nwg1yZ7A_J_cNbb5x5uJxxgkcxO4",
  authDomain: "portfolio-b46e3.firebaseapp.com",
  projectId: "portfolio-b46e3",
  messagingSenderId: "998162094617",
  appId: "1:998162094617:web:e09068c4ed53de2284a888",
  measurementId: "G-B4PXH1BETG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
