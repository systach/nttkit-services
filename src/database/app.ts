// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirebasePrivateKey } from './utils';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getFirebasePrivateKey('API', 'KEY'),
    authDomain: getFirebasePrivateKey('AUTH', 'DOMAIN'),
    projectId: getFirebasePrivateKey('PROJECT', 'ID'),
    storageBucket: getFirebasePrivateKey('STORAGE', 'BUCKET'),
    messagingSenderId: getFirebasePrivateKey('MESSAGING', 'SENDER', 'ID'),
    appId: getFirebasePrivateKey('APP', 'ID'),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
