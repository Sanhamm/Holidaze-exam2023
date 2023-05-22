import React, { useState } from "react";
import {
  AddMoreBTn,
  CheckBoxDiv,
  ErrorMsg,
  H1Venue,
  InputDefault,
  InputDiv,
  LabelStyled,
  LogoVenue,
  TextArea,
  VenuButton,
} from "../GlobalStyle";
import Logo from "../../media/Holidaze.svg";
import usePostApi from "../../Hooks/usePostApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { URL_POST_VENUES } from "../../Utils/Url";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import useApiMethod from "../../Hooks/useApiMehod";

const EditVenueIndex = () => {
  const { id } = useParams();

  const [inputFields, setInputFields] = useState([{ id: 1, name: "input-1" }]);
  const [fetchData, dataInfo, isError, response] = useApiMethod();
  const { data } = useApi(`${URL_POST_VENUES}/${id}`);
  console.log(dataInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data
      ? {
          name: data.name,
          description: data.description,
          price: data.price,
          maxGuests: data.maxGuests,
        }
      : {},
  });

  const handleEdit = (editInfo) => {
    fetchData(`${URL_POST_VENUES}/${id}`, "PUT", editInfo);
  };
  if (isError) {
    console.warn(isError);
  }
  console.log(response);
  if (response?.status === 200) {
    window.location.href = `/Venue/${id}`;
  }

  const addInputField = () => {
    const newInputId = inputFields.length + 1;
    const newInput = {
      id: newInputId,
      name: `input-${newInputId}`,
    };
    setInputFields([...inputFields, newInput]);
  };

  return (
    <InputDiv>
      <LogoVenue src={Logo} alt='Logo of holidaze' />
      <H1Venue>Edit your venue</H1Venue>
      <ErrorMsg>{errors.name?.message}</ErrorMsg>
      <InputDefault
        {...register("name")}
        placeholder='Title'
        defaultValue={data?.name}
      />
      {inputFields.map((inputField, index) => (
        <div key={`image-${index}`}>
          {" "}
          <ErrorMsg>{errors.media && errors.media[index]?.message}</ErrorMsg>
          <InputDefault
            type='text'
            id={`image[${index}]`}
            name={inputField.name}
            placeholder='Image Url'
            {...register(`media[${index}]`)}
            defaultValue={data?.media}
          />
        </div>
      ))}
      <AddMoreBTn onClick={addInputField}>+ Add Input Field</AddMoreBTn>

      <TextArea
        name='description'
        id=''
        cols='30'
        rows='10'
        {...register("description")}
        defaultValue={data?.description}
      />
      <ErrorMsg>{errors.description?.message}</ErrorMsg>

      <InputDefault
        {...register("price")}
        type='number'
        placeholder='Price'
        defaultValue={data?.price}
      />
      <ErrorMsg>{errors.price?.message}</ErrorMsg>
      <InputDefault
        {...register("maxGuests")}
        type='number'
        placeholder='Max guest'
        defaultValue={data?.maxGuests}
      />
      <ErrorMsg>{errors.maxGuests?.message}</ErrorMsg>

      <CheckBoxDiv>
        <input {...register("name")} type='checkbox' id='wifi' />
        <LabelStyled htmlFor='wifi'>Wifi</LabelStyled>
        <input {...register("name")} type='checkbox' id='parking' />
        <LabelStyled htmlFor='parking'>Parking</LabelStyled>
        <input {...register("name")} type='checkbox' id='breakfast' />
        <LabelStyled htmlFor='breakfast'>Breakfast</LabelStyled>
        <input {...register("name")} type='checkbox' id='pets' />
        <LabelStyled htmlFor='pets'>Pets</LabelStyled>
      </CheckBoxDiv>
      <InputDiv>
        <VenuButton onClick={handleSubmit(handleEdit)}>Edit venue</VenuButton>
      </InputDiv>
    </InputDiv>
  );
};

export default EditVenueIndex;
