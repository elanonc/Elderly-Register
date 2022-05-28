
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAljWWL1W9J5EO920eIlVA0GtKgGZ2KxRY",
  authDomain: "crud-idosos.firebaseapp.com",
  databaseURL: "https://crud-idosos-default-rtdb.firebaseio.com",
  projectId: "crud-idosos",
  storageBucket: "crud-idosos.appspot.com",
  messagingSenderId: "887861793435",
  appId: "1:887861793435:web:8be23ffbab48eadbc5ac3e"
};

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var reference = app.database().ref();

export default reference  