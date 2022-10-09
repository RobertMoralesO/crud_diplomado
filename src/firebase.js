// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHQrTY_1npmYpMpXOLYnaW91OJBiH8toA",
  authDomain: "crud-diplomado.firebaseapp.com",
  projectId: "crud-diplomado",
  storageBucket: "crud-diplomado.appspot.com",
  messagingSenderId: "471696851945",
  appId: "1:471696851945:web:319f6924c0a05e9ae70178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}