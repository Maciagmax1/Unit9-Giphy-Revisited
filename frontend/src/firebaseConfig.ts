import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBb-3lJ2yABXLZuvG5CLPrW73LYKSEvrZc",
  authDomain: "giphy-bba21.firebaseapp.com",
  projectId: "giphy-bba21",
  storageBucket: "giphy-bba21.appspot.com",
  messagingSenderId: "1095523868634",
  appId: "1:1095523868634:web:c880197ee8e9fee8a86ae3",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
