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
  //console.log(data);
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
        placeholder='Title'
        defaultValue={data.name}
        {...register("name")}
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
            defaultValue={data.media}
            {...register(`media[${index}]`)}
          />
        </div>
      ))}
      <AddMoreBTn onClick={addInputField}>+ Add Input Field</AddMoreBTn>

      <TextArea
        name='description'
        id=''
        cols='30'
        rows='10'
        defaultValue={data.description}
        {...register("description")}
      />
      <ErrorMsg>{errors.description?.message}</ErrorMsg>

      <InputDefault
        type='number'
        placeholder='Price'
        defaultValue={data.price}
        {...register("price")}
      />
      <ErrorMsg>{errors.price?.message}</ErrorMsg>
      <InputDefault
        type='number'
        placeholder='Max guest'
        defaultValue={data.maxGuests}
        {...register("maxGuests")}
      />
      <ErrorMsg>{errors.maxGuests?.message}</ErrorMsg>

      <CheckBoxDiv>
        <input
          defaultChecked={data.meta?.wifi ? true : false}
          {...register("meta.wifi")}
          type='checkbox'
          id='wifi'
        />
        <LabelStyled htmlFor='wifi'>Wifi</LabelStyled>
        <input
          defaultChecked={data.meta?.parking ? true : false}
          {...register("meta.parking")}
          type='checkbox'
          id='parking'
        />
        <LabelStyled htmlFor='parking'>Parking</LabelStyled>
        <input
          defaultChecked={data.meta?.breakfast ? true : false}
          {...register("meta.breakfast")}
          type='checkbox'
          id='breakfast'
        />
        <LabelStyled htmlFor='breakfast'>Breakfast</LabelStyled>
        <input
          defaultChecked={data.meta?.pets ? true : false}
          {...register("meta.pets")}
          type='checkbox'
          id='pets'
        />
        <LabelStyled htmlFor='pets'>Pets</LabelStyled>
      </CheckBoxDiv>
      <InputDiv>
        <VenuButton onClick={handleSubmit(handleEdit)}>Edit venue</VenuButton>
      </InputDiv>
    </InputDiv>
  );
};

export default EditVenueIndex;
