import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAad5T2CADuJwIXn4ujK9uKBnXU7AwByVE",
  authDomain: "blogging-db.firebaseapp.com",
  projectId: "blogging-db",
  storageBucket: "blogging-db.appspot.com",
  messagingSenderId: "1033289232831",
  appId: "1:1033289232831:web:39e5ee5862701c1b98f10a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
