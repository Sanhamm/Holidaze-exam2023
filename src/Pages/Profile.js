import React from "react";
import ProfileSite from "../Components/Profile";
import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze</title>
        <meta name='Profile page holidaze' />
      </Helmet>
      <ProfileSite />;
    </>
  );
};

export default Profile;
