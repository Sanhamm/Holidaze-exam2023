import React from "react";
import Loginindex from "../Components/Login";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Holidaze | Login</title>
        <meta name='Login on Hollidaze to start renting out or find a home for you' />
      </Helmet>
      <Loginindex />
    </div>
  );
};

export default LoginPage;
