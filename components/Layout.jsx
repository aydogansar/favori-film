import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";
import Header from "./Header";

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
        <title>Filmlerim</title>
      </Head>
      <Header />
      {children}
    </React.Fragment>
  );
};
export default Layout;
