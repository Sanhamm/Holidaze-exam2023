import React, { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { URL_ALL_LISTINGS } from "../../Utils/Url";
import VenuesListing from "./ListingVenues";
import HeroImg from "./HeroPic";
import FilterSearch from "./FilterSaerch";
import LoaderSpinner from "../Loader";

const HomeIndex = () => {
  const { data, isLoading, isError } = useApi(
    URL_ALL_LISTINGS + "?_owner=true"
  );
  const [inputText, setInputText] = useState("");
  const [filterSearch, setFilterSearch] = useState("normal");
  const [sortedLowProducts, setSortedLowProducts] = useState([]);

  const scrolldown = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const filteredProducts = data.filter((product) => {
      return product.name.toLowerCase().includes(inputText.toLowerCase());
    });

    let sortedProducts;

    if (filterSearch === "lowToHigh") {
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (filterSearch === "highToLow") {
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      sortedProducts = filteredProducts;
    }

    setSortedLowProducts(sortedProducts);
  }, [data, inputText, filterSearch]);

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <div>
      <HeroImg scrolldown={scrolldown} />
      <FilterSearch search={setInputText} filter={setFilterSearch} />
      <VenuesListing venues={sortedLowProducts} id='scrolldown' />
    </div>
  );
};

export default HomeIndex;
