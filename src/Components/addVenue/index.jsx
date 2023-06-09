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
  NotVenueP,
  NotVenueDiv,
  NotVenueH1,
  StyledLink,
} from "./style";
import { URL_POST_VENUES } from "../../Utils/Url";
import useApiMethod from "../../Hooks/useApiMehod";
import { URL_PROFILE } from "../../Utils/Url";
import useLocalStorage from "../../Hooks/useLoacalestorage";

const AddVenueIndex = () => {
  const [inputFields, setInputFields] = useState([{ id: 1, name: "input-1" }]);
  // const { data, response, isError, postData } = usePostApi();
  const [fetchData, dataInfo, isError, response] = useApiMethod();
  const [venueManager, setVenueManager] = useLocalStorage("venueManager");

  const venueM = JSON.parse(localStorage.getItem("venueManager"));

  const name = JSON.parse(localStorage.getItem("name"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAdd = (data) => {
    fetchData(URL_POST_VENUES, "POST", data);
  };

  const becomeVenueManager = () => {
    fetchData(`${URL_PROFILE}/${name}`, "PUT", {
      venueManager: true,
    });
  };

  if (isError) {
    console.log(isError);
  }
  if (dataInfo?.venueManager) {
    setVenueManager(dataInfo.venueManager);
  }
  if (response?.status === 201) {
    window.location.href = `/Venue/${dataInfo.id}`;
  }
  if (response?.status === 200) {
    window.location.href = `/AddVenue`;
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
      <AddMoreBTn onClick={addInputField}>+ Add More Images</AddMoreBTn>
      <TextArea
        name='Description'
        placeholder='Description of house'
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
        <AddVenuButton onClick={handleSubmit(handleAdd)}>
          Add venue
        </AddVenuButton>
      </InputDiv>
      {venueM === true ? (
        ""
      ) : venueM === null ? (
        <NotVenueDiv>
          <NotVenueH1>You are not logged in</NotVenueH1>
          <NotVenueP>
            We can see you are not logged in or registered, if you want to rent
            out your home you need to be logged in.<br></br>{" "}
            <StyledLink to={"/Login"}>Login</StyledLink> or{" "}
            <StyledLink to={"/Register"}>Register</StyledLink>
          </NotVenueP>
        </NotVenueDiv>
      ) : (
        <NotVenueDiv>
          <NotVenueH1>You are not a venue manager</NotVenueH1>
          <NotVenueP>
            We can see you are not an venue manager, if you want to rent out
            your home you need to become one.<br></br>{" "}
            <StyledLink onClick={becomeVenueManager}>Click here</StyledLink>
          </NotVenueP>
        </NotVenueDiv>
      )}
    </AddVenueDiv>
  );
};

export default AddVenueIndex;
