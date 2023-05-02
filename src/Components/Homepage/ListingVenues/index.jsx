import React from "react";
import noImage from "../../../media/NoMedia.png";
import {
  ButtonCardStyle,
  CardDivPriceButton,
  CardGrid,
  CardStyle,
  H1CardStyle,
  ImgCard,
  PCardStyle,
  PriceCardStyle,
} from "./style";
import "./style.css";
import { Link } from "react-router-dom";
const VenuesListing = ({ venues }) => {
  return (
    <CardGrid>
      {venues.map((venue, idx) => {
        return (
          <CardStyle
            key={idx}
            cover={
              venue.media.length === 0 ? (
                <ImgCard src={noImage} alt='nothing to see yet' />
              ) : (
                <ImgCard src={venue.media[0]} alt={venue.name} />
              )
            }
          >
            <div>
              <H1CardStyle>{venue.name}</H1CardStyle>
              <PCardStyle>Guests: {venue.maxGuests}</PCardStyle>
              <PCardStyle>
                includes: {venue.meta.wifi ? "Wifi" : ""}
                {venue.meta.parking ? " Parking" : ""}
                {venue.meta.breakfast ? " Breakfast" : ""}
                {venue.meta.pets ? " Pets" : ""}
              </PCardStyle>
              <CardDivPriceButton>
                <PriceCardStyle>{venue.price},-</PriceCardStyle>
                <Link to={`/Venue/${venue.id}`}>
                  <ButtonCardStyle>Rent venue</ButtonCardStyle>
                </Link>
              </CardDivPriceButton>
            </div>
          </CardStyle>
        );
      })}
    </CardGrid>
  );
};

export default VenuesListing;
