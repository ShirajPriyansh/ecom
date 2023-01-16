import React from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUp from "../SignUp/SignUp";

const SignIn = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if(response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In </button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In Redirect </button> */}
      <SignUp />
    </div>
  );
};

export default SignIn;
