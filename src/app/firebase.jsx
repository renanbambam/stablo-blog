// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClD8r5aNVKi4spTfhuGnA_lhPggpjQ7Tg",
  authDomain: "vocal-recorder-582a0.firebaseapp.com",
  projectId: "vocal-recorder-582a0",
  storageBucket: "vocal-recorder-582a0.appspot.com",
  messagingSenderId: "437858286942",
  appId: "1:437858286942:web:e227e1100802657eeb23cf",
  measurementId: "G-Z3D7HXHDGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
