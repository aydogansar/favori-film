import React, { useContext } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { StoreContext } from "../store";
import { useObserver } from "mobx-react";

const HamburgerMenuComp = () => {
  const store = useContext(StoreContext);
  const clickHandler = () => {
    store.hamburgerMenuOpen = !store.hamburgerMenuOpen;
  };
  return useObserver(() => (
    <HamburgerMenu
      className="hamburgerMenu"
      isOpen={store.hamburgerMenuOpen}
      menuClicked={clickHandler}
      width={18}
      height={15}
      strokeWidth={2}
      rotate={0}
      color="#fff"
      borderRadius={0}
      animationDuration={0.5}
    />
  ));
};
export default HamburgerMenuComp;
