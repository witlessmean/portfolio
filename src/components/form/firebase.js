import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5LezBb74IgZTHpt5R9EdcrtO7V19w37o",
    authDomain: "portfolio-connect-8ed8a.firebaseapp.com",
    projectId: "portfolio-connect-8ed8a",
    storageBucket: "portfolio-connect-8ed8a.appspot.com",
    messagingSenderId: "494616797562",
    appId: "1:494616797562:web:56caf2524b46fac87336c3"
});


const db = firebaseApp.firestore();

export { db };

