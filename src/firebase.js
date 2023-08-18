// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBjFhHWF0FCaB6JefVyJzZVK1z_p8mTurE",
  authDomain: "news-app-authnetication.firebaseapp.com",
  projectId: "news-app-authnetication",
  storageBucket: "news-app-authnetication.appspot.com",
  messagingSenderId: "325450532827",
  appId: "1:325450532827:web:1b0f9c9de1f7a0024709fe",
  measurementId: "G-F7XTSGLBRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app, auth}