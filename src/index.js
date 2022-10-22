import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSVeOwLPxxpIN7RXkgkhJRPl9wsPM5Gp8",
  authDomain: "react-b670d.firebaseapp.com",
  projectId: "react-b670d",
  storageBucket: "react-b670d.appspot.com",
  messagingSenderId: "623520113749",
  appId: "1:623520113749:web:c9853f51793b163765e0dc"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
