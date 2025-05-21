// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5RfACLMXGKl83fzu2QgCmi3Co5IHY1w4",
  authDomain: "colectores-faac8.firebaseapp.com",
  projectId: "colectores-faac8",
  storageBucket: "colectores-faac8.firebasestorage.app",
  messagingSenderId: "7441867894",
  appId: "1:7441867894:web:c0fb895bbe3ae121f76b57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };