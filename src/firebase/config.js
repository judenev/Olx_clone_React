import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBKaGPXOeB-yW_969bDiYtlEfniyfgY7uA",
    authDomain: "olxclone-12729.firebaseapp.com",
    projectId: "olxclone-12729",
    storageBucket: "olxclone-12729.appspot.com",
    messagingSenderId: "1051071801614",
    appId: "1:1051071801614:web:e19f09bcf7e52050c20f5f",
    measurementId: "G-6SP39YSFC0"
  };

  export  default firebase.initializeApp(firebaseConfig)