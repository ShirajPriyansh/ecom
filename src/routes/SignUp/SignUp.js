import React, { useState } from "react";
import FromInput from "../../components/form-input/FromInput";
import Button from "../../components/Button/Button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import './signUp.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create the user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label="Name"
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          required
        />

        <FromInput
          label="Email"
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />

        <FromInput
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />

        <FromInput
          label="Confirm Password"
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <Button buttonType='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
