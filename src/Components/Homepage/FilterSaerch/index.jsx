import React, { useState } from "react";
import {
  FilterBackgroundDiv,
  FilterBtn,
  FilterGridDiv,
  FilterIkon,
  FilterTag,
  SearchBar,
} from "./style";

const FilterSearch = ({ search, filter }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterTag, setFilterTag] = useState("");

  return (
    <FilterGridDiv>
      <SearchBar
        placeholder='Search'
        onChange={(prod) => {
          search(prod.target.value);
          //console.log(prod.target.value);
        }}
      />
      <FilterTag
        onClick={() => {
          filter("normal");
          setOpenFilter(false);
          setFilterTag("");
        }}
      >
        {filterTag}
      </FilterTag>
      <FilterIkon
        onClick={() => {
          if (openFilter === false) {
            setOpenFilter(true);
          } else {
            setOpenFilter(false);
          }
        }}
      />

      {openFilter ? (
        <FilterBackgroundDiv>
          <FilterBtn
            onClick={() => {
              filter("lowToHigh");
              setOpenFilter(false);
              setFilterTag("Lowest First X");
            }}
          >
            Lowest first
          </FilterBtn>
          <FilterBtn
            onClick={() => {
              filter("highToLow");
              setOpenFilter(false);
              setFilterTag("Highest First X");
            }}
          >
            Highest first
          </FilterBtn>
        </FilterBackgroundDiv>
      ) : (
        ""
      )}
    </FilterGridDiv>
  );
};

export default FilterSearch;
