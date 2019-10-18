import Firebase from '@firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyARNNtuFbeoyV4xvahNYSJGj2RkmstN30I",
    authDomain: "fir-practices-cd2e1.firebaseapp.com",
    databaseURL: "https://fir-practices-cd2e1.firebaseio.com",
    projectId: "fir-practices-cd2e1",
    storageBucket: "fir-practices-cd2e1.appspot.com",
    messagingSenderId: "377259593805",
    appId: "1:377259593805:web:3386e3ab7d756e00e4cc04"
};
// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
