import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBkEHl9lKzhC65KSPd9tZ3TIxl-rwcfRhk",
  authDomain: "sastakart-1319b.firebaseapp.com",
  projectId: "sastakart-1319b",
  storageBucket: "sastakart-1319b.appspot.com",
  messagingSenderId: "933528120397",
  appId: "1:933528120397:web:ca44778bf2401dc5bbc004",
  measurementId: "G-4Y8JKQX1E2"
  };

  export const app =  initializeApp(firebaseConfig)
  export const storage = getStorage(app);
  export const db = getFirestore(app)
   const auth = getAuth(app)


