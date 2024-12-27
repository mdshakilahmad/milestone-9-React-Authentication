// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEqhp0S3Ae6Ax6X1w4sN0OcHFRrIWxOo4",
  authDomain: "auth-moha-milon-eb5b0.firebaseapp.com",
  projectId: "auth-moha-milon-eb5b0",
  storageBucket: "auth-moha-milon-eb5b0.firebasestorage.app",
  messagingSenderId: "672079756901",
  appId: "1:672079756901:web:ba887276d72cf833aad08c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
