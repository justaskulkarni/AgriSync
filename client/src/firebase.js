

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs0NrQrTjYyPHLNiritpyVHHBxxcbeOMA",
  authDomain: "sms-otp-e74eb.firebaseapp.com",
  projectId: "sms-otp-e74eb",
  storageBucket: "sms-otp-e74eb.appspot.com",
  messagingSenderId: "6305111099",
  appId: "1:6305111099:web:898eb7d300d8dd957b901e",
  measurementId: "G-KHC4CJEZXH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
