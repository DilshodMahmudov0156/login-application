import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCqAQrzwejQ7jXri5khJkrgkcpBFz8_h-Y",
    authDomain: "perfect-login-f86b1.firebaseapp.com",
    databaseURL: "https://perfect-login-f86b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "perfect-login-f86b1",
    storageBucket: "perfect-login-f86b1.appspot.com",
    messagingSenderId: "891477804222",
    appId: "1:891477804222:web:c8e26d9a810c26d2250aef"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const imageDb = getStorage(app);
const db = getDatabase(app);

export { auth, provider, db, imageDb};