import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwUNJFu8OV15Okl7VKoZklc82KV3Ivsg0",
  authDomain: "test-3e840.firebaseapp.com",
  projectId: "test-3e840",
  storageBucket: "test-3e840.firebasestorage.app",
  messagingSenderId: "1035220180823",
  appId: "1:1035220180823:web:d8861e5f952751dcbd2812",
  measurementId: "G-HP3PERYXZY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db , createUserWithEmailAndPassword, signInWithEmailAndPassword };