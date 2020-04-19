import React, { useContext, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../store";
import FilmBox from "./FilmBox";

const FilmList = () => {
  const store = useContext(StoreContext);

  return useObserver(() =>
    store.Films.Search.map((Film) => {
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
