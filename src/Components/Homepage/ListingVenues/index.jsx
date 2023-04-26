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
  console.log(venues);
  return (
    <CardGrid>
      {venues.map((venue, idx) => {
        // let imageListing;
        // if (venue.media[0].match(/.*\.(jpeg|jpg|gif|png)/i)) {
        //   imageListing = venue.media[0];
        // } else {
        //   imageListing = noImage;
        // }

        console.log(venue.id);
        return (
          <CardStyle
            key={idx}
            cover={
              venue.media ? (
                <ImgCard src={venue.media[0]} alt={venue.name} />
              ) : (
                <ImgCard src={noImage} alt='nothing to see yet' />
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
