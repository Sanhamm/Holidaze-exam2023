import React from "react";
import EditVenueIndex from "../Components/editVenue";
import { Helmet } from "react-helmet";
const EditVenue = () => {
  return (
    <>
      <EditVenueIndex />;
      <Helmet>
        <title>Holidaze | Edit venue</title>
        <meta name='Edit your venue, so people can rent your home and you can earn money' />
      </Helmet>
      ;
    </>
  );
};

export default EditVenue;
