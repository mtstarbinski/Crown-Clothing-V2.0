import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// INITIALIZE FIREBASE AND FIRESTORE DATABSE
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

// INITIALIZE GOOGLE'S AUTH PROVIDER
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// CREATES A ENTRY FOR USER IN FIRESTORE DB
export const createUserDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userDataSnapshot = await getDoc(userDocRef);

  if (!userDataSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

// SIGN IN WITH GOOGLE POPUP
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// SIGN IN WITH GOOGLE REDIRECT
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// CREATE NEW USER FROM EMAIL AND PASSWORD
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN IN USER FROM EMAIL AND PASSWORD
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// SIGN OUT USER
export const signOutUser = async () => await signOut(auth);

// LISTENS TO AUTH STATE AND KEEPS TRACK OF LOGGED IN USERS
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export default firebaseApp;
