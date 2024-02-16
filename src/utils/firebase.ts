// Workaround async storage issue
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, signOut } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIXM9X-RvmSToEJHhEgC7tEeohc_Fs5eQ",
  authDomain: "postop-9ef29.firebaseapp.com",
  projectId: "postop-9ef29",
  storageBucket: "postop-9ef29.appspot.com",
  messagingSenderId: "480438981479",
  appId: "1:480438981479:web:58d5564d0f960043f895c2",
  measurementId: "G-SC51F1RXH0",
};

export const app = initializeApp(firebaseConfig);

// Export methods
export const firestore = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);

export const logout = async () => {
  await signOut(auth);
};

/**
 *
 * @param lengthOfString length of id to return
 * @returns random ID made from A-z 0-9 Symbols
 */
export const makeRandomString = (lengthOfString: number) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < lengthOfString; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
