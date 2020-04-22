import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../store";
import FilmBox from "./FilmBox";

const FilmList = ({ type }) => {
  const store = useContext(StoreContext);
  const message =
    type === "search"
      ? "Sonuç bulunamadı"
      : "Henüz favorilere kayıtlı film yok";
  return useObserver(() =>
    (
      type === "search"
        ? store.Films.Search[0] !== "bulunumadı"
        : store.Favorites.length !== 0
    ) ? (
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
    ) : (
      <h4 className="message">{message}</h4>
    )
  );
};
export default FilmList;
