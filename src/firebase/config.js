// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ9eqz-3R_DVzW9pWYkr7AZjDQjgtN5Oo",
  authDomain: "piecegram.firebaseapp.com",
  projectId: "piecegram",
  storageBucket: "piecegram.appspot.com",
  messagingSenderId: "343310223620",
  appId: "1:343310223620:web:785ca6862194790812a851",
  measurementId: "G-H4D6NHBPXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

analytics.getAnalytics(firebase)

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();

export{projectfirestore, projectstorage};