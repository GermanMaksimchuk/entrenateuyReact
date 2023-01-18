import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdKp38HF1gIYugCJhV8RkzAFMkwdMyyEg",
  authDomain: "entrenateuy.firebaseapp.com",
  projectId: "entrenateuy",
  storageBucket: "entrenateuy.appspot.com",
  messagingSenderId: "1084797197668",
  appId: "1:1084797197668:web:758835cf6ba1736e712e71"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

