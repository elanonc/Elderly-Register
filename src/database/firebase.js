import { initializeApp } from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAljWWL1W9J5EO920eIlVA0GtKgGZ2KxRY",
    authDomain: "crud-idosos.firebaseapp.com",
    databaseURL: "https://crud-idosos-default-rtdb.firebaseio.com",
    projectId: "crud-idosos",
    storageBucket: "crud-idosos.appspot.com",
    messagingSenderId: "887861793435",
    appId: "1:887861793435:web:1bda04c44507dc35c5ac3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var reference = app.database().ref();

export default reference  