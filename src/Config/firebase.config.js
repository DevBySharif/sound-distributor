// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHcwe_JLnd5hGMqbrFEq5KbQ5KWXcB7rs",
  authDomain: "distributor-37abf.firebaseapp.com",
  projectId: "distributor-37abf",
  storageBucket: "distributor-37abf.appspot.com",
  messagingSenderId: "525289373347",
  appId: "1:525289373347:web:c5b1f34fcc6569f69cc916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth