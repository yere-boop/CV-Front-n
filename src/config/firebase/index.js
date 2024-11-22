import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1r46O2Du0cqL1kz6Y93-7H6HX5TVJRhY",
  authDomain: "final-front-n-yere.firebaseapp.com",
  databaseURL: "https://final-front-n-yere-default-rtdb.firebaseio.com",
  projectId: "final-front-n-yere",
  storageBucket: "final-front-n-yere.firebasestorage.app",
  messagingSenderId: "694936940724",
  appId: "1:694936940724:web:669689a7cd6f6c6cc5e7e1"
};

const app = initializeApp(firebaseConfig);

export default app;     