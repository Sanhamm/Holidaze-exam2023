import React, { useEffect } from "react";
import {
  BtnDiv,
  CancelBtn,
  EditButton,
  EditDiv,
  EditImg,
  InputDefault,
  LinkStyled,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import usePostApi from "../../Hooks/usePostApi";
import { URL_PROFILE } from "../../Utils/Url";
import useLocalStorage from "../../Hooks/useLoacalestorage";

const EditAvatarIndex = () => {
  const avatarPic = JSON.parse(localStorage.getItem("avatar"));
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const name = JSON.parse(localStorage.getItem("name"));
  const [avatar, setAvatar] = useLocalStorage("avatar");

  const { data, response, isError, postData } = usePostApi();
  const URL_EDIT_AVATAR = `${URL_PROFILE}/${name}/media`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(avatarPic);

  async function onSubmit(editAvatar) {
    console.log(editAvatar);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(editAvatar),
    };
    await postData(URL_EDIT_AVATAR, options);

    if (isError) {
      console.warn(isError);
    }
  }
  console.log(data);
  console.log(response);

  useEffect(() => {
    if (data) {
      setAvatar(data.avatar);
    }
  }, [data]);

  if (response.ok) {
    window.location.href = `/Profile/${name}`;
  }

  return (
    <EditDiv>
      <EditImg src={avatarPic} alt='Avatar of your profile' />
      <span>{errors.avatar?.message}</span>
      <InputDefault {...register("avatar")} type='url' placeholder={avatar} />
      <BtnDiv>
        <EditButton onClick={handleSubmit(onSubmit)}>Edit avatar</EditButton>
        <LinkStyled to={`/profile/${name}`}>
          <CancelBtn>Cancel</CancelBtn>
        </LinkStyled>
      </BtnDiv>
    </EditDiv>
  );
};

export default EditAvatarIndex;
