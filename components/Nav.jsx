import React, { useContext } from "react";
import Link from "./Link";
import { StoreContext } from "../store";

const Nav = ({ id }) => {
  const store = useContext(StoreContext);
  const clickHandler = () => {
    store.hamburgerMenuOpen = false;
  };
  return (
    <nav id={id}>
      <ul>
        {store.menus.map((menu, i) => {
          return (
            <Link href={menu.href} key={i}>
              <li onClick={clickHandler}>{menu.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
