import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_PUBLIC_APIKEY,
    authDomain: import.meta.env.VITE_PUBLIC_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PUBLIC_PROJECTID,
    storageBucket: import.meta.env.VITE_PUBLIC_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_PUBLIC_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_PUBLIC_APPID,
    measurementId: import.meta.env.VITE_PUBLIC_MEASUREMENTID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { auth, db, storage };
