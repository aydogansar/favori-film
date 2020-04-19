import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";

const Layout = ({ children }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.Favorites = localStorage.getItem("Favorites")
      ? JSON.parse(localStorage.getItem("Favorites"))
      : [];
  }, [store.Favorites]);
  return (
    <React.Fragment>
      <Head>
        <title>Filmlerim</title>
        <script
          src="https://kit.fontawesome.com/85a2e236af.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      {children}
    </React.Fragment>
  );
};
export default Layout;
