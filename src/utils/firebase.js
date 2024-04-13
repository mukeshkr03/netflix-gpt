// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Z7ZUVd3V6kgcvBarjZRnfkGySHsf4Z0",
  authDomain: "netflixgpt-61ff2.firebaseapp.com",
  projectId: "netflixgpt-61ff2",
  storageBucket: "netflixgpt-61ff2.appspot.com",
  messagingSenderId: "403607300879",
  appId: "1:403607300879:web:40a93ade10eeab839a2c7a",
  measurementId: "G-XE2QZMSR02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();