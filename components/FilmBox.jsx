import React, { useEffect, useState, useContext } from "react";
import { useObserver } from "mobx-react";
import posed from "react-pose";
import { StoreContext } from "../store";
import { toggleFavorites } from "../functions";
import ReactTooltip from "react-tooltip";

const Box = posed.div({
  closed: {
    y: -500,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
});
const FilmBox = ({ imdbId, title, poster, year }) => {
  const store = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);

  const clickHandler = () => {
    toggleFavorites(store, { id: imdbId, title, poster, year });
  };
  return useObserver(() => (
    <Box className="filmBox" pose={open ? "open" : "closed"}>
      <img
        src={
          poster === "N/A"
            ? "https://www.laemmle.com/sites/default/files/default_images/default-poster.jpg"
            : poster
        }
      />
      <span className="detailCard">
        <h5>{title}</h5>
        <span>{year}</span>
        <span
          id={imdbId}
          className={
            store.Favorites.map((film) => {
              return film.id;
            }).indexOf(imdbId) !== -1
              ? "favorite active"
              : "favorite"
          }
          onClick={clickHandler}
        >
          <i className="far fa-heart"></i>Favorilerime Ekle
        </span>
      </span>
    </Box>
  ));
};
export default FilmBox;
