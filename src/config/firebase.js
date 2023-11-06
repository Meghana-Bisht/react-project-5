// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwcULvqdtAAMk1ruhjw6EYXmdWf9FvnBQ",
  authDomain: "vite-contact-94cea.firebaseapp.com",
  projectId: "vite-contact-94cea",
  storageBucket: "vite-contact-94cea.appspot.com",
  messagingSenderId: "237882868555",
  appId: "1:237882868555:web:e33e7053e965341faf1ece",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

