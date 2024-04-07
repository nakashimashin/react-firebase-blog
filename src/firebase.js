import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIdUV1aVxs0p4o6R9FP0nVP75o2PeoomI",
  authDomain: "blog-76ed9.firebaseapp.com",
  projectId: "blog-76ed9",
  storageBucket: "blog-76ed9.appspot.com",
  messagingSenderId: "531476946925",
  appId: "1:531476946925:web:c489c41d565469717dd1e4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const db = getFirestore(app);

export { auth, provider, db}