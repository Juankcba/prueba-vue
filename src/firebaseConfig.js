import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAsDQnGG8KXARceRKD97ih7vItT4lJRNFw",
    authDomain: "prueba-vite.firebaseapp.com",
    projectId: "prueba-vite",
    storageBucket: "prueba-vite.appspot.com",
    messagingSenderId: "735567543756",
    appId: "1:735567543756:web:1d99d29e19ba2e0f0d3169",
    measurementId: "G-N8V3EPFLW3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { auth, db, storage };
