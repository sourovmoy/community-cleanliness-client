import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnlkszNRgvFLz_kKwmA_egUexusuJgy5g",
  authDomain: "community-cleanliness-17266.firebaseapp.com",
  projectId: "community-cleanliness-17266",
  storageBucket: "community-cleanliness-17266.firebasestorage.app",
  messagingSenderId: "549267415829",
  appId: "1:549267415829:web:4190f49b58f4f4e6143f1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
