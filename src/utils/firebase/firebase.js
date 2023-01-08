import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNN7-XKR56-9PT5WC8_aEEmyRsQU5URjk",
  authDomain: "ecom-db-e967a.firebaseapp.com",
  projectId: "ecom-db-e967a",
  storageBucket: "ecom-db-e967a.appspot.com",
  messagingSenderId: "833723730483",
  appId: "1:833723730483:web:e7c79d0c632d323b673146",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  propmt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            });
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userDocRef;
}