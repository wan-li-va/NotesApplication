import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBo22edHcyvvcx733QILfGs6AuXkOVSqHk",
    authDomain: "notesapplication-74fdb.firebaseapp.com",
    databaseURL: "https://notesapplication-74fdb.firebaseio.com",
    projectId: "notesapplication-74fdb",
    storageBucket: "notesapplication-74fdb.appspot.com",
    messagingSenderId: "496447756319",
    appId: "1:496447756319:web:e0a9e0cace8376a9809d2a",
    measurementId: "G-CGGBQZE2GJ"
}

firebase.initializeApp(config);
export default firebase;