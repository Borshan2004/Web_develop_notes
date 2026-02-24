// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9Okt4wdREAhcR5kQU9afsC9pZJWR4d84",
    authDomain: "dragon-large-scale-project.firebaseapp.com",
    projectId: "dragon-large-scale-project",
    storageBucket: "dragon-large-scale-project.firebasestorage.app",
    messagingSenderId: "727343709768",
    appId: "1:727343709768:web:980dc41963689866dae27d",
    measurementId: "G-6LM5QKHSEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);