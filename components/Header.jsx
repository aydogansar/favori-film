import React from "react";
import Nav from "./Nav";
import HamburgerMenuComp from "./HamburgerMenuComp";
import Link from "./Link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h4 id="logo">
          <img src="./logo.png" />
          FAVORİFİLM
        </h4>
      </Link>
      <Nav id="menus" />
      <HamburgerMenuComp />
    </header>
  );
};
export default Header;
