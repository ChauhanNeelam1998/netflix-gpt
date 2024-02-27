// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc2WjI2kDShYPTV3Jn2wNzysSSPjWk-io",
  authDomain: "netflixgpt-bf667.firebaseapp.com",
  projectId: "netflixgpt-bf667",
  storageBucket: "netflixgpt-bf667.appspot.com",
  messagingSenderId: "76458496215",
  appId: "1:76458496215:web:a2eb3c745301c22c7d6092",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
