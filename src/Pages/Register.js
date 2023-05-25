import React from "react";
import RegisterIndex from "../Components/Register";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze | Register</title>
        <meta name='Register for Holidaze so you can start to rent our or rent your dream vacation' />
      </Helmet>
      <RegisterIndex />
    </>
  );
};

export default Register;
