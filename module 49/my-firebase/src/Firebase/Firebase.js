//dont share firebase confiq online
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHbony3fUix5UuuPjObsuCRp5kXQtq35c",
  authDomain: "simple-firebase-auth-ae455.firebaseapp.com",
  projectId: "simple-firebase-auth-ae455",
  storageBucket: "simple-firebase-auth-ae455.firebasestorage.app",
  messagingSenderId: "37934586578",
  appId: "1:37934586578:web:2563e25db021f8e0f26b0b",
  measurementId: "G-WZ8ZT5ME83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);