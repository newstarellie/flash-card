// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxy6tfCvlS2nJvLo51Xq_EadUEY63lwlw",
  authDomain: "flashcard-f78b1.firebaseapp.com",
  databaseURL: "https://flashcard-f78b1-default-rtdb.firebaseio.com",
  projectId: "flashcard-f78b1",
  storageBucket: "flashcard-f78b1.appspot.com",
  messagingSenderId: "549913857702",
  appId: "1:549913857702:web:cb39e7b32fc30f92b1ae67",
  measurementId: "G-R9JGCCEFNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export {
  database
}