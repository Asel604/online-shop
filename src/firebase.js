// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARU8121EkpnIHnAbCMQGeUXujr5EOS1Co",
  authDomain: "online-shop-4abfa.firebaseapp.com",
  projectId: "online-shop-4abfa",
  storageBucket: "online-shop-4abfa.appspot.com",
  messagingSenderId: "818652008975",
  appId: "1:818652008975:web:5666b097a2e61fb009c97a",
  measurementId: "G-0KJVPR1ZKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)