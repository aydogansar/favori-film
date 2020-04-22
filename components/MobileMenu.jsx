import React, { useContext } from "react";
import Nav from "./Nav";
import { StoreContext } from "../store";
import { useObserver } from "mobx-react";
import posed from "react-pose";

const Box = posed.div({
  closed: {
    x: -1000,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
});

const MobileMenu = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <Box className="mobile" pose={store.hamburgerMenuOpen ? "open" : "closed"}>
      <Nav id="mobileMenu" />
    </Box>
  ));
};
export default MobileMenu;
