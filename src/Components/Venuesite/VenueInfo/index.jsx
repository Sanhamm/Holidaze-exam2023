import React from "react";
import {
  DivAllInfo,
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
const VenueInfo = ({ data }) => {
  return (
    <DivAllInfo>
      <H1VenueInfo>{data.name}</H1VenueInfo>
      <PVenueInfo>{data.description}</PVenueInfo>
      <div>
        <FlexDiv>
          <ProfileAvatar
            src={data.owner.avatar === null ? NoAvatar : data.owner.avatar}
            alt={data.owner.name}
          />
          <PAvatar>{data.owner.name}</PAvatar>
        </FlexDiv>
        <GridProfileDiv>
          <div>
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
            <h1>Calender</h1>
            <h2>calender2</h2>
            <h2>Calender</h2>
            <button>calender</button>
          </div>
        </GridProfileDiv>
      </div>
    </DivAllInfo>
  );
};

export default VenueInfo;
