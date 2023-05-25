import React from "react";
import AddVenueIndex from "../Components/addVenue";
import { Helmet } from "react-helmet";

const AddVenue = () => {
  return (
    <>
      <AddVenueIndex />{" "}
      <Helmet>
        <title>Holidaze | Add venue</title>
        <meta name='Add your venue, so people can rent you can earn money' />
      </Helmet>
      ;
    </>
  );
};

export default AddVenue;
