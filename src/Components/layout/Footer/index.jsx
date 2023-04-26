import React from "react";
import { BackToTop, BackgroundFooter, CopyRight } from "./style";

const Footer = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  return (
    <BackgroundFooter>
      <BackToTop onClick={scrollToTop}>Back To Top ^</BackToTop>
      <CopyRight>Holidaze 2023&copy;</CopyRight>
    </BackgroundFooter>
  );
};

export default Footer;
