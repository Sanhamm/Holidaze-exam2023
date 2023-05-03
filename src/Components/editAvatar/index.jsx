import React, { useEffect } from "react";
import {
  BtnDiv,
  CancelBtn,
  EditButton,
  EditDiv,
  EditImg,
  InputDefault,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import usePostApi from "../../Hooks/usePostApi";
import { URL_PROFILE } from "../../Utils/Url";
import { Link } from "react-router-dom";
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

  return (
    <EditDiv>
      <EditImg src={avatarPic} alt='Avatar of your profile' />
      <span>{errors.avatar?.message}</span>
      <InputDefault {...register("avatar")} type='url' />
      <BtnDiv>
        <EditButton onClick={handleSubmit(onSubmit)}>Edit avatar</EditButton>
        <CancelBtn>
          {" "}
          <Link to={`/profile/${name}`}>Cancel</Link>
        </CancelBtn>
      </BtnDiv>
    </EditDiv>
  );
};

export default EditAvatarIndex;
