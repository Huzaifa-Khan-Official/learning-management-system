import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB4N3Fq_hCmbongv16YOU1AlVxufh-I730",
    authDomain: "classy-fashion-huzaifa.firebaseapp.com",
    projectId: "classy-fashion-huzaifa",
    storageBucket: "classy-fashion-huzaifa.appspot.com",
    messagingSenderId: "446514660959",
    appId: "1:446514660959:web:163baf7f785506c652fdea"
};

const app = initializeApp(firebaseConfig);

export { app }