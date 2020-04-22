import React from "react";
import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FilmList from "../components/FilmList";
import Pages from "../components/Pages";

const Home = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>Ana Sayfa | FAVORİFİLM</title>
      </Head>
      <SearchBox />
      <div id="Results">
        <div id="FilmList">
          <FilmList type="search" />
        </div>
        <Pages />
      </div>
    </div>
  );
};
export default Home;
