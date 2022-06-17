
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Tz0AU0fdPkIYMW1i2YdsMPsqTPI3YLY",
  authDomain: "boruvkovafarma.firebaseapp.com",
  projectId: "boruvkovafarma",
  storageBucket: "boruvkovafarma.appspot.com",
  messagingSenderId: "704636069629",
  appId: "1:704636069629:web:ffcd322323d1871f398094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app
