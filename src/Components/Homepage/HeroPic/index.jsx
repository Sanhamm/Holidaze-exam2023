import React from "react";
import BgImg from "../../../media/MediaFrontPic.jpg";
import {
  ButtonHeroGrid,
  H1Hero,
  HeroDiv,
  HeroInfo,
  ImgHero,
  PHero,
  RentOutButton,
  RentVenueButton,
} from "./style";
const HeroImg = () => {
  return (
    <HeroDiv>
      <ImgHero src={BgImg} alt='Hero of a house' />
      <HeroInfo>
        <H1Hero>Private resorts</H1Hero>
        <PHero>
          Rent a <span style={{ color: "#ffcb65" }}>private resort</span> for a
          reasonable price, right here at{" "}
          <span style={{ color: "#ffcb65" }}>Holidaze.</span>
        </PHero>
        <ButtonHeroGrid>
          <RentVenueButton>Rent venue</RentVenueButton>
          <RentOutButton>Rent out</RentOutButton>
        </ButtonHeroGrid>
      </HeroInfo>
    </HeroDiv>
  );
};

export default HeroImg;
