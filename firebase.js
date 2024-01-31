import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDvS0DbxaVRMBUl9bSQHpOa26yPseuLWz8",
    authDomain: "dropbox-clone-bf98b.firebaseapp.com",
    projectId: "dropbox-clone-bf98b",
    storageBucket: "dropbox-clone-bf98b.appspot.com",
    messagingSenderId: "1077478113694",
    appId: "1:1077478113694:web:d94f961031891958a1568f"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };