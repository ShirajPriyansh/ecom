import React from "react";

import SignIn from "../../components/SignIn/SignIn";

import './authentication.styles.scss';

import SignUp from "../../components/SignUp/SignUp";


const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
