import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOkzi8BChnZrj66rMqCWtfgDNePiAmHCE",
  authDomain: "practica-firebase-20220383.firebaseapp.com",
  projectId: "practica-firebase-20220383",
  storageBucket: "practica-firebase-20220383.appspot.com",
  messagingSenderId: "83402977938",
  appId: "1:83402977938:web:2f28e9231a87f96e60ac4b"
};

console.log("Valor de configuracion", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}

export { database, storage };