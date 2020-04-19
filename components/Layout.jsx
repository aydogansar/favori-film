import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Filmlerim</title>
      </Head>
      {children}
    </React.Fragment>
  );
};
export default Layout;
