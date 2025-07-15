import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsRlVTkHEiMelfxSXRXEeE9F4SEt9_Z9s",
  authDomain: "prepwise-2c567.firebaseapp.com",
  projectId: "prepwise-2c567",
  storageBucket: "prepwise-2c567.firebasestorage.app",
  messagingSenderId: "135165304162",
  appId: "1:135165304162:web:e6332f836fcb2dfb3ba03b",
  measurementId: "G-Z692GXR14C",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
