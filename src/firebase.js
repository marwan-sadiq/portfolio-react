"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// Import the fimport { initializeApp } from "firebase/app";
const analytics_1 = require("firebase/analytics");
const firestore_1 = require("firebase/firestore"); // <-- Add this
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyBukv9BlD-ShN62og89FDq5QMI_l0xUFLo",
    authDomain: "kitle-ed4ff.firebaseapp.com",
    projectId: "kitle-ed4ff",
    storageBucket: "kitle-ed4ff.appspot.com", // <-- Fix this line
    messagingSenderId: "826605858668",
    appId: "1:826605858668:web:2472f7def414195a728d49",
    measurementId: "G-1TE7QP11WS"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
exports.db = (0, firestore_1.getFirestore)(app); //
