import { Card } from "antd";
import React from "react";
import noImage from "../../../media/NoMedia.png";
const VenuesListing = ({ venues }) => {
  return (
    <>
      {venues.map((venue, idx) => {
        console.log(venue);
        return (
          <Card
            key={idx}
            cover={
              <img
                src={!venue.media[0] ? venue.media[0] : { noImage }}
                alt={venue.name}
              />
            }
          ></Card>
        );
      })}
    </>
  );
};

export default VenuesListing;
