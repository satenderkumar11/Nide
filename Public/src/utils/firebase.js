
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBK5Z9O2XNP4ZvuZrWLj0clYBg25Rf0XlI",
  authDomain: "nide-aca68.firebaseapp.com",
  projectId: "nide-aca68",
  storageBucket: "nide-aca68.appspot.com",
  messagingSenderId: "1043256265279",
  appId: "1:1043256265279:web:84c32200e5592f0707468a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()