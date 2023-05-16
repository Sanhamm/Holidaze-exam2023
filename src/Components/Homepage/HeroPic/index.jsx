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
  StyledLink,
} from "./style";
const HeroImg = ({ scrolldown }) => {
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
          <RentVenueButton onClick={scrolldown}>Rent venue</RentVenueButton>
          <StyledLink to='/AddVenue'>
            {" "}
            <RentOutButton>Rent out</RentOutButton>
          </StyledLink>
        </ButtonHeroGrid>
      </HeroInfo>
    </HeroDiv>
  );
};

export default HeroImg;
