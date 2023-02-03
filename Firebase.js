// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpWfiysBXqm9kQ--qZg52Aoo2p9pWWZsA",
  authDomain: "realtor-clone-fe4e7.firebaseapp.com",
  projectId: "realtor-clone-fe4e7",
  storageBucket: "realtor-clone-fe4e7.appspot.com",
  messagingSenderId: "896893152692",
  appId: "1:896893152692:web:5dcc0fbf2d66db8e5456e1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()