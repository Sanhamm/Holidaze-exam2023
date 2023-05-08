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

const EditVenueIndex = () => {
  const { id } = useParams();

  const [inputFields, setInputFields] = useState([{ id: 1, name: "input-1" }]);
  const { data, response, isError, postData } = usePostApi();
  const { dataInfo } = useApi(`${URL_POST_VENUES}/${id}`);
  console.log(dataInfo);
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataInfo
      ? {
          name: dataInfo.name,
          description: dataInfo.description,
          price: dataInfo.price,
          maxGuests: dataInfo.maxGuests,
        }
      : {},
  });

  async function onSubmit(addVenue) {
    console.log(addVenue);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(addVenue),
    };
    await postData(`${URL_POST_VENUES}/${id}`, options);

    if (isError) {
      console.warn(isError);
    }
  }
  console.log(response);
  console.log(data);

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
        defaultValue={dataInfo?.name}
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
            defaultValue={dataInfo?.media}
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
        defaultValue={dataInfo?.description}
      />
      <ErrorMsg>{errors.description?.message}</ErrorMsg>

      <InputDefault
        {...register("price")}
        type='number'
        placeholder='Price'
        defaultValue={dataInfo?.price}
      />
      <ErrorMsg>{errors.price?.message}</ErrorMsg>
      <InputDefault
        {...register("maxGuests")}
        type='number'
        placeholder='Max guest'
        defaultValue={dataInfo?.maxGuests}
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
        <VenuButton onClick={handleSubmit(onSubmit)}>Edit venue</VenuButton>
      </InputDiv>
    </InputDiv>
  );
};

export default EditVenueIndex;
