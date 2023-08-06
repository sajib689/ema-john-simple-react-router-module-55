// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgC0RnKtJrKfUXbPW-CrXuJ3aKDnghWtI",
  authDomain: "pro-ema-john.firebaseapp.com",
  projectId: "pro-ema-john",
  storageBucket: "pro-ema-john.appspot.com",
  messagingSenderId: "298367341830",
  appId: "1:298367341830:web:a79bccf33595b8c4673a87",
  measurementId: "G-R4NDKBPVRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app