import { Carousel } from "antd";
import React, { useRef } from "react";
import noImg from "../../../media/NoMedia.png";
import {
  CarouselDiv,
  CarouselPhoto,
  LeftArrow,
  NextDivBtn,
  PrevDivBtn,
  RightArrow,
} from "./style";
const CarouselImg = ({ media }) => {
  const slider = useRef(null);

  return (
    <CarouselDiv>
      <PrevDivBtn>
        <LeftArrow onClick={() => slider.current.prev()} />
      </PrevDivBtn>
      <Carousel effect='fade' ref={slider}>
        {media?.length === 0 ? (
          <CarouselPhoto src={noImg} alt='no image avalible' />
        ) : (
          media?.map((img, idx) => {
            return <CarouselPhoto src={img} alt={idx} />;
          })
        )}
      </Carousel>
      <NextDivBtn>
        <RightArrow onClick={() => slider.current.next()} />
      </NextDivBtn>
    </CarouselDiv>
  );
};

export default CarouselImg;
