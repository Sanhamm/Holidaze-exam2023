import React from "react";
import {
  BookingsTitle,
  DivAllInfo,
  DivBtns,
  DltBtn,
  GridProfileDiv,
  GuestPTag,
  GuestSpanProfile,
  H1VenueInfo,
  PAvatar,
  PVenueInfo,
  ProfileAvatar,
} from "./style";
import { FlexDiv } from "./style";
import NoAvatar from "../../../media/blank-profile-picture-gc1cc27fcf_1280.png";
import { VenuButton } from "../../GlobalStyle";
import { Link } from "react-router-dom";
import { URL_POST_VENUES } from "../../../Utils/Url";
import usePostApi from "../../../Hooks/usePostApi";
import BookingCalender from "./Calender";
const VenueInfo = ({ data, id }) => {
  const name = JSON.parse(localStorage.getItem("name"));
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const { postData } = usePostApi();

  console.log(data);

  async function onSubmit() {
    console.log("deleteVenue");
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await postData(`${URL_POST_VENUES}/${id}`, options);

    window.location.href = `/Profile/${name}`;
  }
  console.log(id);
  return (
    <DivAllInfo>
      <H1VenueInfo>{data.name}</H1VenueInfo>
      <PVenueInfo>{data.description}</PVenueInfo>
      <div>
        <GridProfileDiv>
          <div>
            <FlexDiv>
              <ProfileAvatar
                src={data.owner.avatar === null ? NoAvatar : data.owner.avatar}
                alt={data.owner.name}
              />
              <PAvatar to={`/Profile/${data.owner.name}`}>
                {data.owner.name}
              </PAvatar>
            </FlexDiv>
            <GuestPTag>
              <GuestSpanProfile>Guests: </GuestSpanProfile>
              {data.maxGuests}
            </GuestPTag>
            <GuestPTag>
              <GuestSpanProfile>Includes: </GuestSpanProfile>
              {data.meta.wifi ? "Wifi" : ""}
              {data.meta.parking ? " Parking" : ""}
              {data.meta.breakfast ? " Breakfast" : ""}
              {data.meta.pets ? " Pets" : ""}
            </GuestPTag>
            <GuestPTag>
              <GuestSpanProfile>Costs: </GuestSpanProfile>
              {data.price},- per night
            </GuestPTag>
          </div>
          <div>
            <BookingsTitle>Book this Venue</BookingsTitle>
            <BookingCalender id={data.id} />
          </div>
        </GridProfileDiv>
      </div>
      <DivBtns>
        {data.owner.name === name ? (
          <Link to={`/EditVenue/${data.id}`} state={{ data }}>
            <VenuButton>Edit</VenuButton>
          </Link>
        ) : (
          ""
        )}
        {data.owner.name === name ? (
          <Link>
            <DltBtn onClick={onSubmit}>Delete</DltBtn>
          </Link>
        ) : (
          ""
        )}
      </DivBtns>
    </DivAllInfo>
  );
};

export default VenueInfo;
