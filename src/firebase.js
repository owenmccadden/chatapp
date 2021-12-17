import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBLhMZ2XpqrQtNFbyJFNC-Ryn6EQm_xe4A",
    authDomain: "chatapp-7823e.firebaseapp.com",
    projectId: "chatapp-7823e",
    storageBucket: "chatapp-7823e.appspot.com",
    messagingSenderId: "425699067738",
    appId: "1:425699067738:web:a7cda2a50fe0c8ca5a9563",
    measurementId: "G-11TRWS5Z1P"
  }).auth();