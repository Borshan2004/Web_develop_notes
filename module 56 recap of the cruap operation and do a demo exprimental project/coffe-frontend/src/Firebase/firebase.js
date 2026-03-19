// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi_Bycscc_SMVMRhH_msw1ku2eLWlDjkI",
    authDomain: "coffee-store-project-140cd.firebaseapp.com",
    projectId: "coffee-store-project-140cd",
    storageBucket: "coffee-store-project-140cd.firebasestorage.app",
    messagingSenderId: "564915653044",
    appId: "1:564915653044:web:d194a3402499c11f850ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);