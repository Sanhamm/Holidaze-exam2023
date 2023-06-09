import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { URL_ALL_LISTINGS, URL_POST_VENUES } from "../../Utils/Url";
import CarouselImg from "./picCarousel";
import VenueInfo from "./VenueInfo";
import LoaderSpinner from "../Loader";

const VenueSiteIndex = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `${URL_ALL_LISTINGS}${id}?_bookings=true&_owner=true`
  );

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (isError) {
    console.error(isError);
  }

  return (
    <div>
      <CarouselImg media={data?.media} />
      <VenueInfo data={data} id={id} />
    </div>
  );
};

export default VenueSiteIndex;
