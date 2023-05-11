import React from "react";
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

  const owner = JSON.parse(localStorage.getItem("name"));
  console.log(owner);

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (isError) {
    console.error(isError);
  }

  // console.log(Date(data?.bookings[0].dateFrom), Date(data?.bookings[0].dateTo));

  data.bookings.map((date, idx) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const dateFrom = new Date(date.dateFrom).toLocaleDateString(
      "en-US",
      options
    );
    const dateTo = new Date(date.dateTo).toLocaleDateString("en-US", options);
    return console.log("from:", dateFrom, "to:", dateTo);
  });
  return (
    <div>
      <CarouselImg media={data.media} />
      <VenueInfo data={data} id={id} />
    </div>
  );
};

export default VenueSiteIndex;
