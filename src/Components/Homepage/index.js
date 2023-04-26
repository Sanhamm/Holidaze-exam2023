import React from "react";
import useApi from "../../Hooks/useApi";
import { URL_ALL_LISTINGS } from "../../Utils/Url";
import VenuesListing from "./ListingVenues";
import HeroImg from "./HeroPic";
import FilterSearch from "./FilterSaerch";

const HomeIndex = () => {
  const { data, isLoading, isError } = useApi(URL_ALL_LISTINGS);

  if (isLoading) {
    return "Loadin...";
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <HeroImg />
      <FilterSearch />
      <VenuesListing venues={data} />
    </div>
  );
};

export default HomeIndex;
