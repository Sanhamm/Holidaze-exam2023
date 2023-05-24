import React from "react";
import { BackToTop, BackgroundFooter, CopyRight } from "./style";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <BackgroundFooter>
      <BackToTop onClick={scrollToTop}>Back To Top ^</BackToTop>
      <CopyRight>Holidaze 2023&copy;</CopyRight>
    </BackgroundFooter>
  );
};

export default Footer;
