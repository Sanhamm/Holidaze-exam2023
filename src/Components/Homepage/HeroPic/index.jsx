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
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <HeroDiv>
      <ImgHero src={BgImg} alt='Hero of a house' />
      <HeroInfo>
        <H1Hero>Holidaze</H1Hero>
        <PHero>
          Elevate Your Vacation with Our
          <span style={{ color: "#ffcb65" }}> Premium </span>Homes
        </PHero>
        <ButtonHeroGrid>
          <RentVenueButton>Rent venue</RentVenueButton>
          <Link to='/AddVenue'>
            <RentOutButton>Rent out</RentOutButton>
          </Link>
        </ButtonHeroGrid>
      </HeroInfo>
    </HeroDiv>
  );
};

export default HeroImg;
