import firebase from "firebase";
import firebaseConfig from "../firebase.json";

export type TFirebaseUser = firebase.auth.UserCredential;

export const fb = firebase.initializeApp(firebaseConfig);
