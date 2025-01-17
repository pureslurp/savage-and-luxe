// src/lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

let app;
let auth: Auth;
let db: Firestore;

try {
  console.log('Initializing Firebase...');
  
  if (getApps().length === 0) {
    console.log('Creating new Firebase instance...');
    app = initializeApp(firebaseConfig);
  } else {
    console.log('Using existing Firebase instance...');
    app = getApps()[0];
  }

  console.log('Initializing Auth...');
  auth = getAuth(app);
  console.log('Auth initialized:', !!auth);

  console.log('Initializing Firestore...');
  db = getFirestore(app);
  console.log('Firestore initialized:', !!db);

} catch (error) {
  console.error('Error during Firebase initialization:', error);
  throw error;
}

export { app, auth, db };