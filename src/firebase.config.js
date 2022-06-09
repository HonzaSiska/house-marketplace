import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD__LfTg4UJk7zpq5fAyh4ptHqV3Sb8AsM",
  authDomain: "house-marketplace-app2-b78f6.firebaseapp.com",
  projectId: "house-marketplace-app2-b78f6",
  storageBucket: "house-marketplace-app2-b78f6.appspot.com",
  messagingSenderId: "528173527733",
  appId: "1:528173527733:web:09a658e11c9acb511784fc"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()