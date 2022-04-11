// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbzbSaYNhxUnFq92_zvnM8S081BCcx8Ys",
  authDomain: "ema-john-simple-b-5.firebaseapp.com",
  projectId: "ema-john-simple-b-5",
  storageBucket: "ema-john-simple-b-5.appspot.com",
  messagingSenderId: "900743290302",
  appId: "1:900743290302:web:1085444541cf93f0a2adef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;