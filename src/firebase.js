import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtGGLAHG2vgodZMjrlUEEHyogHS8GYbPE",
    authDomain: "technical-4a0ae.firebaseapp.com",
    projectId: "technical-4a0ae",
    storageBucket: "technical-4a0ae.appspot.com",
    messagingSenderId: "183553855075",
    appId: "1:183553855075:web:70021c585ec15e0b7bf256",
    measurementId: "G-W7RS1SBYNT"
  }
  firebase.initializeApp(config);
  // firebase.analytics();

  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos")