// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAtzQdwHB6kciXRL8dlb0VxS4YpRmZ-Is",
  authDomain: "learn-d794c.firebaseapp.com",
  projectId: "learn-d794c",
  storageBucket: "learn-d794c.appspot.com",
  messagingSenderId: "508621555517",
  appId: "1:508621555517:web:38c36aae4806f6c2dfe754",
  databaseURL: "https://learn-d794c-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { app, auth, googleAuthProvider };