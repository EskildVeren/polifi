// Import the functions you need from the SDKs you need

import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY as string,

  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,

  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,

  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,

  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,

  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
};

// Initialise Firebase App
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialise Firebase
export const firebaseAuth = getAuth(app);
export default app;
