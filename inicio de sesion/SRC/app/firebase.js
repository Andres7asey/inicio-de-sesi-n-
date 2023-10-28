// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyhTqRrQlGG9nPq3QYaimsFEB9zR8ss9c",
  authDomain: "inicio-de-sesion-notas.firebaseapp.com",
  projectId: "inicio-de-sesion-notas",
  storageBucket: "inicio-de-sesion-notas.appspot.com",
  messagingSenderId: "705507446911",
  appId: "1:705507446911:web:8d85060e78942df559af4a",
  measurementId: "G-GHQFTD5Q0B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
