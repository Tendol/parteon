import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlzoPYYvEYDXyjvyH84KJGzRkMailEI04",
    authDomain: "parteon-bad3e.firebaseapp.com",
    databaseURL: "https://parteon-bad3e-default-rtdb.firebaseio.com",
    projectId: "parteon-bad3e",
    storageBucket: "parteon-bad3e.appspot.com",
    messagingSenderId: "835644701395",
    appId: "1:835644701395:web:e0d415832c167505173226",
    measurementId: "G-H1FDX420H5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  console.log("someting: ", getUserDocument(user.uid));
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
