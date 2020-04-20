import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../store";
import FilmBox from "./FilmBox";

const FilmList = ({ type }) => {
  const store = useContext(StoreContext);
  return useObserver(() =>
    (type === "search" ? store.Films.Search : store.Favorites).map((Film) => {
      return (
        <FilmBox
          key={Film.imdbID}
          id={Film.imdbID}
          title={Film.Title}
          poster={Film.Poster}
          year={Film.Year}
        />
      );
    })
  );
};
export default FilmList;
