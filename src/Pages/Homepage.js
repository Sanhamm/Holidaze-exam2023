import React from "react";
import HomeIndex from "../Components/Homepage";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Holidaze</title>
        <meta name='Holidaze is a page where you add your own homes to rent out' />
      </Helmet>
      <HomeIndex />
    </div>
  );
};

export default Homepage;
