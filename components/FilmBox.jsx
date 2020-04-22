import React, { useEffect, useState, useContext } from "react";
import { useObserver } from "mobx-react";
import posed from "react-pose";
import { StoreContext } from "../store";
import { toggleFavorites } from "../functions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
const FilmBox = ({ id, title, poster, year }) => {
  const store = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const isFavorite = (id) => {
    store.Favorites.map((film) => {
      return film.imdbID;
    }).indexOf(id) !== -1
      ? setFavorite(true)
      : setFavorite(false);
  };
  useEffect(() => {
    setOpen(true);
    isFavorite(id);
  }, []);
  const clickHandler = () => {
    toggleFavorites(store, { id, title, poster, year });
    isFavorite(id);
  };
  const renderTooltip = (props) => (
    <Tooltip {...props}>
      {favorite ? "Favorilerden Çıkar" : "Favorilere Ekle"}
    </Tooltip>
  );
  return useObserver(() => (
    <Box className="filmBox" id={id} pose={open ? "open" : "closed"}>
      <img
        src={
          poster === "N/A"
            ? "https://www.laemmle.com/sites/default/files/default_images/default-poster.jpg"
            : poster
        }
      />
      <span className="detailCard">
        <span className="title">
          <h5>{title}</h5>
        </span>
        <span>
          <b>{year}</b>
        </span>
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <span className="favorite" onClick={clickHandler}>
            <img src={favorite ? "./favorite_active.png" : "./favorite.png"} />
          </span>
        </OverlayTrigger>
      </span>
    </Box>
  ));
};
export default FilmBox;
