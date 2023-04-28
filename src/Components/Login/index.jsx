import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
import { schema } from "./schema";
import usePostApi from "../../Hooks/usePostApi";
import { URL_LOGIN } from "../../Utils/Url";
import useLocalestorage from "../../Hooks/useLoacalestorage";
import { Avatar } from "antd";

const Loginindex = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data, isError, postData } = usePostApi();
  const [accessToken, setAccessToken] = useLocalestorage("accessToken");
  const [email, setEmail] = useLocalestorage("email");
  const [name, setName] = useLocalestorage("name");
  const [avatar, setAvatar] = useLocalestorage("avatar");
  const [venueManager, setVenueManager] = useLocalestorage("venueManager");

  async function onSubmit(loginUser) {
    console.log(loginUser);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    };
    await postData(URL_LOGIN, options);

    if (isError) {
      console.warn(isError);
    }
  }
  useEffect(() => {
    console.log(data);
    if (data) {
      setAccessToken(data.accessToken);
      setEmail(data.email);
      setName(data.name);
      setAvatar(data.avatar);
      setVenueManager(data.venueManager);
    }
  }, [data]);

  return (
    <LoginDiv>
      <LogoLogin src={Logo} alt='Logo of holidaze' />
      <H1Login>Login</H1Login>
      <InputDiv>
        <InputDefault {...register("email")} placeholder='Username' />
        <span>{errors.email?.message}</span>
        <InputDefault {...register("password")} placeholder='Password' />
        <span>{errors.password?.message}</span>
      </InputDiv>
      <InputDiv>
        <LoginButton onClick={handleSubmit(onSubmit)}>Login</LoginButton>
      </InputDiv>
      <PLogin>
        Do you not have a user?{" "}
        <LinkLogin to='/Register'>Register here</LinkLogin>
      </PLogin>
    </LoginDiv>
  );
};

export default Loginindex;
