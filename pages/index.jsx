import React from "react";
import SearchBox from "../components/SearchBox";
import FilmList from "../components/FilmList";

const Home = () => {
  return (
    <div className="container-fluid">
      <div id="Results">
        <FilmList />
      </div>
      <div></div>
      <SearchBox />
    </div>
  );
};
export default Home;
