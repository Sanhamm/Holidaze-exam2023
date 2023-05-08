import React from "react";
import { H1Loader, Loader, LoaderDiv } from "../GlobalStyle";
import spinner from "../../media/Gear-0.2s-200px.gif";
const LoaderSpinner = () => {
  return (
    <>
      <LoaderDiv>
        <Loader src={spinner} alt='Loadin..' />
      </LoaderDiv>
      <H1Loader>Loading</H1Loader>
    </>
  );
};

export default LoaderSpinner;
