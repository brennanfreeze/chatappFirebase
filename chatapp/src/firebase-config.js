import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtqGOJxwbwxXRiTNgiJYDeaPQ0MASJXIc",
  authDomain: "chatapp-f7d60.firebaseapp.com",
  projectId: "chatapp-f7d60",
  storageBucket: "chatapp-f7d60.appspot.com",
  messagingSenderId: "780998969590",
  appId: "1:780998969590:web:f56d6a5b49d28693e044d7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();