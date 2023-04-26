import React from "react";
import {
  H1Register,
  InputDefault,
  LinkRegister,
  RegisterButton,
  RegisterDiv,
  LogoRegister,
  PRegister,
  InputDiv,
  InputCheckbox,
  CheckboxText,
} from "./style";
import Logo from "../../media/Holidaze.svg";

const RegisterIndex = () => {
  return (
    <RegisterDiv>
      <LogoRegister src={Logo} alt='Logo of holidaze' />
      <H1Register>Register</H1Register>
      <InputDiv>
        <InputDefault placeholder='Username' />
        <InputDefault placeholder='E-mail' />
        <InputDefault placeholder='Avatar Url' />
        <InputDefault placeholder='Password' />
      </InputDiv>
      <div>
        <InputCheckbox placeholder='Password' type='checkbox' />
        <CheckboxText>Become a venue manager!</CheckboxText>
      </div>
      <InputDiv>
        <RegisterButton>Register</RegisterButton>
      </InputDiv>
      <PRegister>
        Are you already registered?{" "}
        <LinkRegister to='/Login'>Login here</LinkRegister>
      </PRegister>
    </RegisterDiv>
  );
};

export default RegisterIndex;
