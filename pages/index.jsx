import React from "react";
import SearchBox from "../components/SearchBox";
import FilmList from "../components/FilmList";
import Pages from "../components/Pages";

const Home = () => {
  return (
    <div className="container-fluid">
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
