import React from "react";
import { StyledTabs, TabsLi } from "./style";
import "./style.modules.css";
import {
  ButtonCardStyle,
  CardDivPriceButton,
  CardGrid,
  CardStyle,
  H1CardStyle,
  ImgCard,
  PCardStyle,
  PriceCardStyle,
} from "../../Homepage/ListingVenues/style";
import { Link } from "react-router-dom";
import noImage from "../../../media/NoMedia.png";
const TabsInfo = ({ data, profileName }) => {
  return (
    <div>
      {profileName === data?.name ? (
        <StyledTabs defaultActiveKey='1' centered tab='My Venues' key={1}>
          <TabsLi tab='Venues' key={1}>
            <CardGrid>
              {data?.venues.map((venue, idx) => {
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
                        <ButtonCardStyle>Show Venue</ButtonCardStyle>
                      </Link>
                    </CardDivPriceButton>
                  </CardStyle>
                );
              })}
            </CardGrid>
          </TabsLi>
          <TabsLi tab='Bookings' key={2}>
            tab 2
          </TabsLi>
          <TabsLi tab='Favourites' key={3}>
            tab 3
          </TabsLi>
        </StyledTabs>
      ) : (
        <StyledTabs defaultActiveKey='1' centered tab='My Venues' key={1}>
          <TabsLi tab='Venues' key={1}>
            <CardGrid>
              {data?.venues.map((venue, idx) => {
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
                        <ButtonCardStyle>Show Venue</ButtonCardStyle>
                      </Link>
                    </CardDivPriceButton>
                  </CardStyle>
                );
              })}
            </CardGrid>
          </TabsLi>
        </StyledTabs>
      )}
    </div>
  );
};

export default TabsInfo;
