import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOFPr7tWX9o--b5bP92PcZSu9_zRP7tGw",
  authDomain: "app-victorious.firebaseapp.com",
  projectId: "app-victorious",
  storageBucket: "app-victorious.appspot.com",
  messagingSenderId: "695011224182",
  appId: "1:695011224182:web:5f0a5c40888080bef74d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
