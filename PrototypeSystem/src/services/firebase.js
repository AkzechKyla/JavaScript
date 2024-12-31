// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpTmmA5uqI8rWKSxWnIXzDF7W3slzbUGE",
  authDomain: "prototype-project-463c9.firebaseapp.com",
  projectId: "prototype-project-463c9",
  storageBucket: "prototype-project-463c9.appspot.com",
  messagingSenderId: "328202250621",
  appId: "1:328202250621:web:f8a55b5fcee0672b188414"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);

export const storage = getStorage(app);
