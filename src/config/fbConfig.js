import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

export const fdConfig = {
  apiKey: "AIzaSyBLiiadz1hxnhHVtNJBMhm3HPyTWJ_p2ZE",
  authDomain: "chamada-dev.firebaseapp.com",
  databaseURL: "https://chamada-dev.firebaseio.com",
  projectId: "chamada-dev",
  storageBucket: "chamada-dev.appspot.com",
  messagingSenderId: "983813684946",
  appId: "1:983813684946:web:0dd48ce9d4346d1ab2b70b",
  measurementId: "G-05QTL5NEBR"
};

// react-redux-firebase config
export const rrfConfig = {
  serProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Initialize Firebase
firebase.initializeApp(fdConfig);
firebase.firestore(); //.settings({ timestampsInSnapshots: true });

export default firebase;