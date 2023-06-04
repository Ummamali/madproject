// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMcsDYkgXiCZnauLeYsxDB-cK1VjMs1xU",
  authDomain: "auth-17cb4.firebaseapp.com",
  projectId: "auth-17cb4",
  storageBucket: "auth-17cb4.appspot.com",
  messagingSenderId: "368044247736",
  appId: "1:368044247736:web:5cf6d062417caa5737024d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);