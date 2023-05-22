import React, { useEffect, useState } from "react";
import { URL_PROFILE } from "../../Utils/Url";
import { Link, useParams } from "react-router-dom";
import noAvatar from "../../media/blank-profile-picture-gc1cc27fcf_1280.png";
import {
  AvatarImg,
  BtnDiv,
  EditBtn,
  H1ProfileInfo,
  InfoDiv,
  PProfileInfo,
  ProfileInfo,
  ProfileInfoAvatar,
  RentOutBtn,
} from "./style";
import TabsInfo from "./tabs";
import useGet from "../../Hooks/useGet";
import LoaderSpinner from "../Loader";
import ModalEdit from "./editModal";
import useApiMethod from "../../Hooks/useApiMehod";
import useLocalStorage from "../../Hooks/useLoacalestorage";

const ProfileSite = () => {
  const [getData, data] = useGet();
  const [fetchData, dataInfo, isError, response] = useApiMethod();
  const [avatar, setAvatar] = useLocalStorage("avatar");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (data) => {
    fetchData(`${URL_PROFILE}/${name}/media`, "PUT", data);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { name } = useParams();
  const profileName = JSON.parse(localStorage.getItem("name"));

  useEffect(() => {
    getData(`${URL_PROFILE}/${name}?_venues=true&_bookings=true`);
  }, [name]);

  if (!data) {
    return <LoaderSpinner />;
  }
  if (isError) {
    console.log(isError);
  }
  if (dataInfo) {
    setAvatar(dataInfo.avatar);
  }
  if (response?.status === 200) {
    window.location.reload();
  }

  return (
    <div>
      <ProfileInfo>
        <ProfileInfoAvatar>
          <AvatarImg
            src={
              data?.avatar === null || data?.avatar === ""
                ? noAvatar
                : data?.avatar
            }
            alt={data?.name}
          />
        </ProfileInfoAvatar>
        <InfoDiv>
          <H1ProfileInfo>{data?.name}</H1ProfileInfo>
          <PProfileInfo>
            {data?.name === profileName
              ? `Rent out your resorts her at Holidaze`
              : "you can also rent out your resorts here at Holidaze"}
          </PProfileInfo>
        </InfoDiv>
        <BtnDiv>
          {name === profileName ? (
            <EditBtn onClick={showModal}>Edit avatar</EditBtn>
          ) : (
            ""
          )}
        </BtnDiv>
        <BtnDiv>
          <Link to={"/addVenue"}>
            <RentOutBtn>Rent out</RentOutBtn>
          </Link>
        </BtnDiv>
      </ProfileInfo>
      <TabsInfo data={data} profileName={profileName} />
      <ModalEdit
        modal={isModalOpen}
        handleCanecel={handleCancel}
        handleOk={handleOk}
        data={data}
        name={profileName}
      />
    </div>
  );
};

export default ProfileSite;
