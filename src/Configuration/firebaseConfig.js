import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4N3Fq_hCmbongv16YOU1AlVxufh-I730",
    authDomain: "classy-fashion-huzaifa.firebaseapp.com",
    projectId: "classy-fashion-huzaifa",
    storageBucket: "classy-fashion-huzaifa.appspot.com",
    messagingSenderId: "446514660959",
    appId: "1:446514660959:web:163baf7f785506c652fdea"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { app, storage, db, auth }