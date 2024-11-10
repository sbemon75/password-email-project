// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd2MXDUu3SBqa-7eLw9TVBp7fNkTXMx-o",
  authDomain: "email-password-project-51b16.firebaseapp.com",
  projectId: "email-password-project-51b16",
  storageBucket: "email-password-project-51b16.firebasestorage.app",
  messagingSenderId: "429791181785",
  appId: "1:429791181785:web:cffa6120e05bd9a24877c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);