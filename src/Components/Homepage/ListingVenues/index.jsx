import React from "react";
import noImage from "../../../media/NoMedia.png";
import { CardGrid, CardStyle, ImgCard } from "./style";
import "./style.css";
const VenuesListing = ({ venues }) => {
  console.log(venues);
  return (
    <CardGrid>
      {venues.map((venue, idx) => {
        let imageListing;
        if (venue.media[0].match(/.*\.(jpeg|jpg|gif|png)/i)) {
          imageListing = venue.media[0];
        } else {
          imageListing = noImage;
        }

        console.log(venue);
        return (
          <CardStyle
            key={idx}
            cover={
              venue.media ? (
                <ImgCard src={imageListing} alt={venue.name} />
              ) : (
                <ImgCard src={imageListing} alt='nothing to see yet' />
              )
            }
          ></CardStyle>
        );
      })}
    </CardGrid>
  );
};

export default VenuesListing;
