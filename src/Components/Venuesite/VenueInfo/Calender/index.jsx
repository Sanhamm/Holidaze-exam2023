import React from "react";
import { ErrorMsg, InputDefault } from "../../../GlobalStyle";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./style.modules.css";
import { BookingSchema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import usePostApi from "../../../../Hooks/usePostApi";
import { URL_BOOKINGS } from "../../../../Utils/Url";
import { EditBtn } from "../../../Profile/style";
import { CalenderDiv } from "./style";

const BookingCalender = ({ id }) => {
  const dateFormat = "YYYY/MM/DD";
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const { response, isError, postData } = usePostApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(BookingSchema),
  });

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
  console.log(response);
  return (
    <div>
      <CalenderDiv>
        <DatePicker
          defaultValue={dayjs()}
          format={dateFormat}
          name='dateFrom'
          onChange={(value) => console.log(value)}
          {...register("dateFrom")}
        />
      </CalenderDiv>
      {errors.dateFrom && <ErrorMsg>{errors?.dateFrom.message}</ErrorMsg>}
      <CalenderDiv>
        <DatePicker
          defaultValue={dayjs()}
          format={dateFormat}
          onChange={(value) => console.log(value)}
          name='dateTo'
          {...register("dateTo")}
        />
      </CalenderDiv>
      {errors.dateTo && <ErrorMsg>{errors?.dateTo.message}</ErrorMsg>}
      <InputDefault type='number' {...register("guests")} />
      {errors.guests && <ErrorMsg>{errors?.guests.message}</ErrorMsg>}
      <EditBtn onClick={handleSubmit(onSubmit)}>Book now</EditBtn>
    </div>
  );
};

export default BookingCalender;
