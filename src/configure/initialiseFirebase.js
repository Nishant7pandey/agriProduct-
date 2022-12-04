import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC__fW-zBenrfiRSXYpC3iO3ZsQWqg65Aw",
  authDomain: "agricultureproduct-7fed5.firebaseapp.com",
  projectId: "agricultureproduct-7fed5",
  storageBucket: "agricultureproduct-7fed5.appspot.com",
  messagingSenderId: "707431211805",
  appId: "1:707431211805:web:5b092e544472251a7d77f4",
  measurementId: "G-5LSDCV1DBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

