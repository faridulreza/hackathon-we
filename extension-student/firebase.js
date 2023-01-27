import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/functions";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi4mfVGu5yS6UeXQIQ-vqSpXk0fDIi1Ag",
  authDomain: "peekaboo-5b3ef.firebaseapp.com",
  projectId: "peekaboo-5b3ef",
  storageBucket: "peekaboo-5b3ef.appspot.com",
  messagingSenderId: "54888862574",
  appId: "1:54888862574:web:618ab3925b069da8e2a77f",
  measurementId: "G-GVV3E10BKF",
  databaseURL: "https://peekaboo-5b3ef-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const rdb = firebase.database();
const auth = firebase.auth();

export { auth, db, firebase, rdb };
