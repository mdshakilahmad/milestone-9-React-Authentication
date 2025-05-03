// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhDna4_ubO-p3Q0UyUjPlnNkvLcBqEErQ",
  authDomain: "user-email-password-auth-73c84.firebaseapp.com",
  projectId: "user-email-password-auth-73c84",
  storageBucket: "user-email-password-auth-73c84.firebasestorage.app",
  messagingSenderId: "630795200573",
  appId: "1:630795200573:web:152b3e51b153f62acda254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// export default app;
