import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzXm11b9in2hn84hBmJt8GXCVqtJJiRC0",
  authDomain: "mychat-e82c8.firebaseapp.com",
  databaseURL: "https://mychat-e82c8-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp }; // App init

export default base;
