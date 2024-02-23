// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgEB7p64-wWTCetU1XWxeLuLmNRIg2XSk",
  authDomain: "linktree-b37d7.firebaseapp.com",
  projectId: "linktree-b37d7",
  storageBucket: "linktree-b37d7.appspot.com",
  messagingSenderId: "374840767231",
  appId: "1:374840767231:web:575213151dc4e22d5112ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
