import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR6QVxPT9xKNufUIhDvC2S-xSC2Ozbrf0",
  authDomain: "fluxocash-60908.firebaseapp.com",
  projectId: "fluxocash-60908",
  storageBucket: "fluxocash-60908.firebasestorage.app",
  messagingSenderId: "128000128249",
  appId: "1:128000128249:web:7d4ae3443cbe265fc99e28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
