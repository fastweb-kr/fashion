// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCPZh1Ozw_Cn86ywS_aMX20hWqPtBfNoGg',
  authDomain: 'pickstyle-6149c.firebaseapp.com',
  projectId: 'pickstyle-6149c',
  storageBucket: 'pickstyle-6149c.appspot.com',
  messagingSenderId: 'y413516842916',
  appId: '1:413516842916:web:cab39983223ac508f8e331',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
