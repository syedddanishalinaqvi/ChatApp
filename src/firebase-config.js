// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6rjeudWHlcL7c9JwdOWtu7E65030glNY",
  authDomain: "chatapp-978ab.firebaseapp.com",
  projectId: "chatapp-978ab",
  storageBucket: "chatapp-978ab.appspot.com",
  messagingSenderId: "16585700935",
  appId: "1:16585700935:web:db60a2bf68e07e4a59e362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider= new GoogleAuthProvider();
export const auth=getAuth(app);
export const db = getFirestore(app) 

