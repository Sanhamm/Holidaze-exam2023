import React from "react";
import {
  H1Login,
  InputDefault,
  InputDiv,
  LinkLogin,
  LoginButton,
  LoginDiv,
  LogoLogin,
  PLogin,
} from "./style";
import Logo from "../../media/Holidaze.svg";

const Loginindex = () => {
  return (
    <LoginDiv>
      <LogoLogin src={Logo} alt='Logo of holidaze' />
      <H1Login>Login</H1Login>
      <InputDiv>
        <InputDefault placeholder='Username' />
        <InputDefault placeholder='Password' />
      </InputDiv>
      <InputDiv>
        <LoginButton>Login</LoginButton>
      </InputDiv>
      <PLogin>
        Do you not have a user?{" "}
        <LinkLogin to='/Register'>Register here</LinkLogin>
      </PLogin>
    </LoginDiv>
  );
};

export default Loginindex;
