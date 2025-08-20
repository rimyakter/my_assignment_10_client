// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5SBZzuXvoWPWhPBJnusvpRNigrx7LCl4",
  authDomain: "roommate-finder-256be.firebaseapp.com",
  projectId: "roommate-finder-256be",
  storageBucket: "roommate-finder-256be.firebasestorage.app",
  messagingSenderId: "84574970114",
  appId: "1:84574970114:web:8bac281c1fe7e71009a21b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
