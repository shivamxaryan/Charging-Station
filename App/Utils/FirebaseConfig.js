import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDgipflOJYzGahuyhJNHB2_shhMCr1CE3A",
  authDomain: "ev-charging-station-21117.firebaseapp.com",
  projectId: "ev-charging-station-21117",
  storageBucket: "ev-charging-station-21117.appspot.com",
  messagingSenderId: "185438377231",
  appId: "1:185438377231:web:1692a95ef2333bcdf55a7a",
  measurementId: "G-NBP84QEWBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
