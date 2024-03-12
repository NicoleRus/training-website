// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyB6IwO62ePMKaqBJNvGQUC5SV7oRutb7lY',
    authDomain: 'ar-crossfit.firebaseapp.com',
    projectId: 'ar-crossfit',
    storageBucket: 'ar-crossfit.appspot.com',
    messagingSenderId: '410654351135',
    appId: '1:410654351135:web:612756f0f5b46dfd0fda2a',
    measurementId: 'G-5XEDSSJK0J'
  }
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
