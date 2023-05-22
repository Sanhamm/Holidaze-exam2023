import React from "react";
import "./style.modules.css";
import {
  BtnDiv,
  CancelBtn,
  EditButton,
  EditDiv,
  EditImg,
  InputDefault,
  LinkStyled,
} from "./style";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { ErrorMsg } from "../../GlobalStyle";
import noAvatar from "../../../media/blank-profile-picture-gc1cc27fcf_1280.png";

const ModalEdit = ({ modal, name, data, handleOk, handleCanecel }) => {
  //console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Modal open={modal} onCancel={handleCanecel} onOk={handleSubmit(handleOk)}>
      <EditDiv>
        <EditImg
          src={
            data.avatar === "" || data.avatar === null ? noAvatar : data.avatar
          }
          alt='Avatar of your profile'
        />
        <ErrorMsg>{errors.avatar?.message}</ErrorMsg>
        <InputDefault
          {...register("avatar")}
          type='url'
          placeholder={"Edit your avatar"}
        />
      </EditDiv>
    </Modal>
  );
};

export default ModalEdit;
