import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import usePostApi from "../../Hooks/usePostApi";
import { URL_REG } from "../../Utils/Url";
import { ErrorMsg } from "../GlobalStyle";

const RegisterIndex = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { response, isError, postData } = usePostApi();
  async function onSubmit(registerUser) {
    console.log(registerUser);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerUser),
    };
    await postData(URL_REG, options);

    if (isError) {
      console.warn(isError);
    }
  }
  if (response.status === 201) {
    window.location.href = "/Login";
  }

  return (
    <RegisterDiv>
      <LogoRegister src={Logo} alt='Logo of holidaze' />
      <H1Register>Register</H1Register>
      <InputDiv>
        <InputDefault {...register("name")} placeholder='Username' />
        <ErrorMsg>{errors.name?.message}</ErrorMsg>
        <InputDefault {...register("email")} placeholder='E-mail' />
        <ErrorMsg>{errors.email?.message}</ErrorMsg>
        <InputDefault {...register("avatar")} placeholder='Avatar Url' />
        <ErrorMsg>{errors.avatar?.message}</ErrorMsg>
        <InputDefault
          {...register("password")}
          placeholder='Password'
          type='password'
        />
        <ErrorMsg>{errors.password?.message}</ErrorMsg>
      </InputDiv>
      <div>
        <InputCheckbox
          placeholder='Password'
          type='checkbox'
          {...register("venueManager")}
        />
        <CheckboxText>Become a venue manager!</CheckboxText>
      </div>
      <InputDiv>
        <RegisterButton onClick={handleSubmit(onSubmit)}>
          Register
        </RegisterButton>
      </InputDiv>
      <PRegister>
        Are you already registered?{" "}
        <LinkRegister to='/Login'>Login here</LinkRegister>
      </PRegister>
    </RegisterDiv>
  );
};

export default RegisterIndex;
