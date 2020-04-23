import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.Favorites = localStorage.getItem("Favorites")
      ? JSON.parse(localStorage.getItem("Favorites"))
      : [];
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>FAVORİFİLM</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <MobileMenu />
      {children}
    </React.Fragment>
  );
};
export default Layout;
