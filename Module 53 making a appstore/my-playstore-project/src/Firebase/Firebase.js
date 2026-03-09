// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNVjwP_XML48HGEO559PVT3xxOLY6RUkA",
    authDomain: "my-playstore-53b1e.firebaseapp.com",
    projectId: "my-playstore-53b1e",
    storageBucket: "my-playstore-53b1e.firebasestorage.app",
    messagingSenderId: "531516367489",
    appId: "1:531516367489:web:635070a7a0517a24cd2380",
    measurementId: "G-H08XZ6XMZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);