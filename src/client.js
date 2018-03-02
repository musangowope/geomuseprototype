// src/client.js
import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBFxaokFZ9mC47XOjAlrSync3be1h4-bm8",
    authDomain: "geomuse-388cd.firebaseapp.com",
    databaseURL: "https://geomuse-388cd.firebaseio.com",
    projectId: "geomuse-388cd",
    storageBucket: "geomuse-388cd.appspot.com",
    messagingSenderId: "1028345859075"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();