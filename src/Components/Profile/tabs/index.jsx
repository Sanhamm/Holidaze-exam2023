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
            <CardGrid>
              {data?.bookings.map((booking, idx) => {
                console.log(booking.venue);
                return (
                  <CardStyle
                    key={idx}
                    cover={
                      booking.venue.media.length === 0 ? (
                        <ImgCard src={noImage} alt='nothing to see' />
                      ) : (
                        <ImgCard
                          src={booking.venue.media[0]}
                          alt={booking.venue.name}
                        />
                      )
                    }
                  >
                    <H1CardStyle>{booking.venue.name}</H1CardStyle>
                    <PCardStyle>Guests: {booking.venue.maxGuests}</PCardStyle>
                    <PCardStyle>
                      includes: {booking.venue.meta.wifi ? "Wifi" : ""}
                      {booking.venue.meta.parking ? " Parking" : ""}
                      {booking.venue.meta.breakfast ? " Breakfast" : ""}
                      {booking.venue.meta.pets ? " Pets" : ""}
                    </PCardStyle>
                    <CardDivPriceButton>
                      <PriceCardStyle>{booking.venue.price},-</PriceCardStyle>
                      <Link to={`/Venue/${booking.venue.id}`}>
                        <ButtonCardStyle>Show Venue</ButtonCardStyle>
                      </Link>
                    </CardDivPriceButton>
                  </CardStyle>
                );
              })}
            </CardGrid>
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
