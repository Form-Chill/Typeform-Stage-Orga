// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU1T5EL-KGrn4BuAUop-kqEIUSMnRIaU4",
  authDomain: "formandchill.firebaseapp.com",
  projectId: "formandchill",
  storageBucket: "formandchill.appspot.com",
  messagingSenderId: "127781043881",
  appId: "1:127781043881:web:4ded00d8ee70e68ec773b8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);


