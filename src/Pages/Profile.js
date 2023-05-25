import React from "react";
import ProfileSite from "../Components/Profile";
import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze PP</title>
        <meta name='Profile page holidaze' />
      </Helmet>
      <ProfileSite />;
    </>
  );
};

export default Profile;
