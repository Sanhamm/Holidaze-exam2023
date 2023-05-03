import React, { useState } from "react";
import Logo from "../../media/Holidaze.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";

import {
  AddVenueDiv,
  CheckBoxDiv,
  H1AddVenue,
  InputDefault,
  LabelStyled,
  LogoAddVenue,
  TextArea,
  InputDiv,
  AddVenuButton,
  AddMoreBTn,
  ErrorMsg,
} from "./style";
import usePostApi from "../../Hooks/usePostApi";
import { URL_POST_VENUES } from "../../Utils/Url";

const AddVenueIndex = () => {
  const [inputFields, setInputFields] = useState([{ id: 1, name: "input-1" }]);
  const { data, response, isError, postData } = usePostApi();
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  console.log(accessToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(addVenue) {
    console.log(addVenue);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(addVenue),
    };
    await postData(URL_POST_VENUES, options);

    if (isError) {
      console.warn(isError);
    }
  }

  if (response.status === 201) {
    window.location.href = `/Venue/${data.id}`;
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
    <AddVenueDiv>
      <LogoAddVenue src={Logo} alt='Logo of holidaze' />
      <H1AddVenue>Add a venue</H1AddVenue>
      <ErrorMsg>{errors.name?.message}</ErrorMsg>
      <InputDefault {...register("name")} type='text' placeholder='Title' />
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
          />
        </div>
      ))}
      <AddMoreBTn onClick={addInputField}>+ Add Input Field</AddMoreBTn>
      <TextArea
        name='Description'
        id=''
        cols='30'
        rows='10'
        {...register("description")}
      ></TextArea>
      <ErrorMsg>{errors.description?.message}</ErrorMsg>
      <InputDefault {...register("price")} type='number' placeholder='Price' />
      <ErrorMsg>{errors.price?.message}</ErrorMsg>
      <InputDefault
        {...register("maxGuests")}
        type='number'
        placeholder='Max guest'
      />
      <ErrorMsg>{errors.maxGuests?.message}</ErrorMsg>
      <CheckBoxDiv>
        <input {...register("meta.wifi")} type='checkbox' id='wifi' />
        <LabelStyled htmlFor='wifi'>Wifi</LabelStyled>
        <input {...register("meta.parking")} type='checkbox' id='parking' />
        <LabelStyled htmlFor='parking'>Parking</LabelStyled>
        <input {...register("meta.breakfast")} type='checkbox' id='breakfast' />
        <LabelStyled htmlFor='breakfast'>Breakfast</LabelStyled>
        <input {...register("meta.pets")} type='checkbox' id='pets' />
        <LabelStyled htmlFor='pets'>Pets</LabelStyled>
      </CheckBoxDiv>
      <InputDiv>
        <AddVenuButton onClick={handleSubmit(onSubmit)}>
          Add venue
        </AddVenuButton>
      </InputDiv>
    </AddVenueDiv>
  );
};

export default AddVenueIndex;
