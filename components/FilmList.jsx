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
    //todo : Daha kısa bir çözüm yazılması lazım
    type === "search" ? (
      store.Films.Search ? (
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
      ) : (
        <h4>{message}</h4>
      )
    ) : store.Favorites.length !== 0 ? (
      store.Favorites.map((Film) => {
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
      <h4>{message}</h4>
    )
  );
};
export default FilmList;
