// Import the fimport { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- Add this
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBukv9BlD-ShN62og89FDq5QMI_l0xUFLo",
  authDomain: "kitle-ed4ff.firebaseapp.com",
  projectId: "kitle-ed4ff",
  storageBucket: "kitle-ed4ff.appspot.com", // <-- Fix this line
  messagingSenderId: "826605858668",
  appId: "1:826605858668:web:2472f7def414195a728d49",
  measurementId: "G-1TE7QP11WS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); //