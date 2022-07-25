// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail, signOut} from "firebase/auth";
import { getFirestore, query, getDocs, collection,where,addDoc} from "firebase/firestore";




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
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = getAuth(app);
const db = getFirestore(app);

export{projectfirestore, projectstorage, timestamp, app, auth, db};


// Google Auth Provider or sign in with google
const googleAuthProvider = new GoogleAuthProvider();
//sign in with google using popup
const SignInWithGoogle = async () => {
  try {
   const res= await signInWithPopup(auth,googleAuthProvider);
   const user = res.user;
   const q  = query(collection(db, "users"), where("uid", "==", user.uid));
   const docs = await getDocs(q);
   if(docs.length === 0){
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name : user.displayName,
        authProvider : "google",
        email : user.email,
        photoURL : user.photoURL,
        createdAt : timestamp()
      });

   }

  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}; 

// login in user with email and password

  const SignInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

// function to register a new user with email and password
const RegisterWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: auth.currentUser.uid,
      name : name,
      authProvider : "email",
      email : email,
      photoURL : "",
      createdAt : timestamp()
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

// function to send password reset email
const SendPasswordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("email sent");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

//log out user

  const SignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  // export all the functions

  export {SignInWithGoogle, SignInWithEmailAndPassword, RegisterWithEmailAndPassword, SendPasswordResetEmail, SignOut };