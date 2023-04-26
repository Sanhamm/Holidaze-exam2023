import React from "react";
import { FilterGridDiv, FilterIkon, SearchBar } from "./style";
const FilterSearch = () => {
  return (
    <FilterGridDiv>
      <SearchBar placeholder='Search' />
      <FilterIkon />
    </FilterGridDiv>
  );
};

export default FilterSearch;
