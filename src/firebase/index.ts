// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB_HHfDjTrjASzki7DB9knYJeTY4O0e6Vc",
  authDomain: "changera.firebaseapp.com",
  projectId: "changera",
  storageBucket: "changera.appspot.com",
  messagingSenderId: "686283924827",
  appId: "1:686283924827:web:1f22e3a1431d4d3bde267e",
  measurementId: "G-KJXMH0DCHK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)