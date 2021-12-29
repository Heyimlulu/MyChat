import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzXm11b9in2hn84hBmJt8GXCVqtJJiRC0",
  authDomain: "mychat-e82c8.firebaseapp.com",
  databaseURL: "https://mychat-e82c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mychat-e82c8",
  storageBucket: "mychat-e82c8.appspot.com",
  messagingSenderId: "507335398967",
  appId: "1:507335398967:web:6459685243e19a5a64d1b2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };