import React, { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export the context
export const FirebaseContext = createContext();

// Export the provider
export const FirebaseProvider = ({ children }) => {

  // Sign in with email and password
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return Promise.resolve(user);
    } catch (error) {
      console.log("Error: " + error);
      return Promise.reject(error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ db, auth, signIn }}>
      {children}
    </FirebaseContext.Provider>
  );
};
