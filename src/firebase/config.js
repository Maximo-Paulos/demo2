import app from "firebase/app";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHoObh1YEMQqwYvOFn_iqNkvkq0Ki8IbY",
  authDomain: "demo2026-9f68d.firebaseapp.com",
  projectId: "demo2026-9f68d",
  storageBucket: "demo2026-9f68d.firebasestorage.app",
  messagingSenderId: "341644251165",
  appId: "1:341644251165:web:59235420c3ffaafa5876f4"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
