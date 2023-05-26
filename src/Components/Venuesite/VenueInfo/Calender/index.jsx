import React, { useState } from "react";
import { ErrorMsg, InputDefault } from "../../../GlobalStyle";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./style.modules.css";
import { bookingSchema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import usePostApi from "../../../../Hooks/usePostApi";
import { URL_BOOKINGS } from "../../../../Utils/Url";
import { EditBtn } from "../../../Profile/style";
import {
  CalenderDiv,
  DatePickerStyled,
  HeadingDate,
  MainDivCalender,
  NotLoggedInDiv,
  NotLoggedInH1,
  NotLoggedInP,
  NumberGuests,
  StyledLink,
} from "./style";

const BookingCalender = ({ id, data }) => {
  const dateFormat = "YYYY/MM/DD";
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const { response, isError, postData } = usePostApi();
  const name = JSON.parse(localStorage.getItem("name"));
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const disabledDates = data.bookings.map((date) => {
    return dayjs(date.dateFrom).startOf("day");
  });
  //console.log(disabledDates);
  async function onSubmit(data) {
    const formattedData = {
      ...data,
      dateFrom: dayjs(data.dateFrom).format("YYYY/MM/DD"),
      dateTo: dayjs(data.dateTo).format("YYYY/MM/DD"),
      venueId: id,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formattedData),
    };
    await postData(URL_BOOKINGS, options);

    if (isError) {
      console.warn(isError);
    }
  }
  if (response.status === 201) {
    window.location.href = `/Profile/${name}`;
  }

  const disabledDate = (current) => {
    const today = dayjs().startOf("day");
    return (
      disabledDates.some((date) => current.isSame(date, "day")) ||
      (selectedDateFrom && current.isBefore(selectedDateFrom, "day")) ||
      current.isBefore(today)
    );
  };

  return (
    <MainDivCalender>
      <CalenderDiv>
        <HeadingDate>Book From:</HeadingDate>
        <HeadingDate>To:</HeadingDate>
        <DatePicker
          onChange={(value) => {
            console.log(value);
          }}
          defaultValue={dayjs()}
          format={dateFormat}
          name='dateFrom'
          {...register("dateFrom")}
          disabledDate={disabledDate}
        />
        <DatePicker
          defaultValue={dayjs()}
          format={dateFormat}
          onChange={(value) => {
            console.log(value);
          }}
          name='dateTo'
          {...register("dateTo")}
          disabledDate={disabledDate}
        />
      </CalenderDiv>
      {errors.dateFrom && <ErrorMsg>{errors?.dateFrom.message}</ErrorMsg>}
      {errors.dateTo && <ErrorMsg>{errors?.dateTo.message}</ErrorMsg>}
      <HeadingDate>Number of guests:</HeadingDate>
      <NumberGuests
        type='number'
        placeholder={0}
        min={1}
        max={data.maxGuests}
        {...register("guests")}
      />
      {errors.guests && <ErrorMsg>{errors?.guests.message}</ErrorMsg>}
      <EditBtn onClick={handleSubmit(onSubmit)}>Book now</EditBtn>
      {accessToken === null ? (
        <NotLoggedInDiv>
          <NotLoggedInH1>Log in</NotLoggedInH1>
          <NotLoggedInP>
            You need to be logged in to book a venue
            <br />
            Log in <StyledLink to={"/Login"}>Here</StyledLink>
          </NotLoggedInP>
        </NotLoggedInDiv>
      ) : data.owner.name === name ? (
        <NotLoggedInDiv>
          <NotLoggedInH1>Your venue</NotLoggedInH1>
          <NotLoggedInP>
            You cannot book one of your own venues.
            <br />
          </NotLoggedInP>
        </NotLoggedInDiv>
      ) : (
        ""
      )}
    </MainDivCalender>
  );
};

export default BookingCalender;
