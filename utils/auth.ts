import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "@firebase/auth";
import { googleProvider, auth } from "./firebase";

export async function signInWithGoogle() {
  await setPersistence(auth, browserSessionPersistence);
  const result = await signInWithPopup(auth, googleProvider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  const user = result.user;
  return { user, token };
}

export async function logOut() {
  console.log("here");
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
}
