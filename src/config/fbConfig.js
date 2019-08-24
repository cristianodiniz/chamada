import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn5NyvomKRBuywEaXZ0aAl_wKO7yr3Sg8",
  authDomain: "chamda-online.firebaseapp.com",
  databaseURL: "https://chamda-online.firebaseio.com",
  projectId: "chamda-online",
  storageBucket: "chamda-online.appspot.com",
  messagingSenderId: "1008614132927",
  appId: "1:1008614132927:web:e82fab044726b07c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
