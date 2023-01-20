import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../Button/Button";

// import {UserContext} from '../../contexts/user.context';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";

import './signIn.styles.scss'

const defaultFormFields = {
  email: "",
  password: "",

};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} = useContext(UserContext);

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const {user} = await signInAuthUserWithEmailAndPassword(
        await signInAuthUserWithEmailAndPassword(
        email, 
        password
        );
      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {

      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default: 
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />

        <div className="buttons-container">
        <Button buttonType='inverted' type="submit">Sign In</Button>
        <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
 