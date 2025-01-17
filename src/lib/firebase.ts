// src/lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';  // Fixed import
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Debug: Log full config values (be careful not to commit this with real values)
console.log('Detailed Firebase Config:', {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId
});

let app;
let auth;
let db;

try {
  console.log('Initializing Firebase...');
  console.log('Number of existing Firebase apps:', getApps().length);
  
  if (!getApps().length) {
    console.log('Creating new Firebase instance...');
    app = initializeApp(firebaseConfig);
    console.log('Firebase app initialized:', app.name);
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