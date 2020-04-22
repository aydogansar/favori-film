import React from "react";
import Nav from "./Nav";
import HamburgerMenuComp from "./HamburgerMenuComp";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header>
      <h4 id="logo">
        <img src="./logo.png" />
        FAVORİFİLM
      </h4>
      <Nav id="menus" />
      <HamburgerMenuComp />
      <MobileMenu />
    </header>
  );
};
export default Header;
