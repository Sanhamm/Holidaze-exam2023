import React, { useEffect } from "react";
import usePostApi from "../../Hooks/usePostApi";
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
import LoaderSpinner from "../Loader";
// import useGet from "../../Hooks/useGet";

const ProfileSite = () => {
  const { data, isError, isLoading, postData } = usePostApi();
  const accessToken = JSON.parse(localStorage.getItem("accessTokne"));
  // const [getData, data, error] = useGet();
  const { name } = useParams();
  const profileName = JSON.parse(localStorage.getItem("name"));

  async function getProfile(profileData) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(profileData),
    };
    await postData(
      `${URL_PROFILE}/${name}?_venues=true&_bookings=true`,
      options
    );
    if (isLoading) {
      return <LoaderSpinner />;
    }
    if (isError) {
      return;
    }
  }
  useEffect(() => {
    getProfile();
    // getData(`${URL_PROFILE}/${name}?_venues=true&_bookings=true`);
  }, [name]);

  // if (error) {
  //   console.log(error);
  // }

  console.log(data);

  return (
    <div>
      <ProfileInfo>
        <ProfileInfoAvatar>
          <AvatarImg
            src={data?.avatar === null ? noAvatar : data?.avatar}
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
            <Link to={"/EditAvatar"}>
              <EditBtn>Edit avatar</EditBtn>
            </Link>
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
    </div>
  );
};

export default ProfileSite;
