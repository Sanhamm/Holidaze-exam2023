import React, { useState } from "react";
import {
  DivAllInfo,
  DivBtns,
  DltBtn,
  EditBtn,
  EditIcon,
  GridProfileDiv,
  GuestPTag,
  GuestSpanProfile,
  H1VenueInfo,
  PAvatar,
  PVenueInfo,
  ProfileAvatar,
  ReadMoreBtn,
} from "./style";
import { FlexDiv } from "./style";
import NoAvatar from "../../../media/blank-profile-picture-gc1cc27fcf_1280.png";
import { Link } from "react-router-dom";
import { URL_POST_VENUES } from "../../../Utils/Url";
import BookingCalender from "./Calender";
import useApiMethod from "../../../Hooks/useApiMehod";
import { Button } from "antd";
const VenueInfo = ({ data, id }) => {
  const name = JSON.parse(localStorage.getItem("name"));
  const [fetchData] = useApiMethod();
  const [openEdit, setOpenEdit] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const token = JSON.parse(localStorage.getItem("accessToken"));
  const handleDelete = () => {
    fetchData(`${URL_POST_VENUES}/${id}`, "DELETE");
  };

  return (
    <DivAllInfo>
      {data.owner.name === name ? (
        <EditIcon
          onClick={() => {
            if (openEdit === false) {
              setOpenEdit(true);
            } else {
              setOpenEdit(false);
            }
          }}
        />
      ) : (
        ""
      )}
      {openEdit ? (
        <DivBtns>
          <Link to={`/EditVenue/${data.id}`} state={{ data }}>
            <EditBtn>Edit</EditBtn>
          </Link>

          <Link>
            <DltBtn onClick={handleDelete}>Delete</DltBtn>
          </Link>
        </DivBtns>
      ) : (
        ""
      )}

      <H1VenueInfo>{data.name}</H1VenueInfo>
      <PVenueInfo>
        {showMore ? data.description : `${data.description.substring(0, 250)}`}
      </PVenueInfo>
      {data.description.length > 250 ? (
        showMore === false ? (
          <ReadMoreBtn onClick={() => setShowMore(true)}>Read more</ReadMoreBtn>
        ) : (
          <ReadMoreBtn onClick={() => setShowMore(false)}>
            Show less
          </ReadMoreBtn>
        )
      ) : (
        ""
      )}

      <div>
        <GridProfileDiv>
          <div>
            <FlexDiv>
              <ProfileAvatar
                src={
                  data.owner.avatar === null || data.owner.avatar === ""
                    ? NoAvatar
                    : data.owner.avatar
                }
                alt={data.owner.name}
              />
              {token ? (
                <PAvatar to={`/Profile/${data.owner.name}`}>
                  {data.owner.name}
                </PAvatar>
              ) : (
                <PAvatar
                  to={"/Login"}
                  title='Cannot visit profiles without being logged in'
                >
                  {data.owner.name}
                </PAvatar>
              )}
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
            <BookingCalender id={data.id} data={data} />
          </div>
        </GridProfileDiv>
      </div>
    </DivAllInfo>
  );
};

export default VenueInfo;
