import React from "react";
import Head from "next/head";
import FilmList from "../components/FilmList";

const FavoritesPage = () => {
  return (
    <div id="Results">
      <Head>
        <title>Favori Filmlerim | FAVORİFİLM</title>
      </Head>
      <div id="FilmList">
        <FilmList type="favorites" />
      </div>
    </div>
  );
};
export default FavoritesPage;
