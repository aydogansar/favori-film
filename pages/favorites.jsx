import React from "react";
import FilmList from "../components/FilmList";

const FavoritesPage = () => {
  return (
    <div id="Results">
      <div id="FilmList">
        <FilmList type="favorites" />
      </div>
    </div>
  );
};
export default FavoritesPage;
