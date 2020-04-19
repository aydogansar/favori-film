import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../store";
import { useObserver } from "mobx-react";
import { getFilms } from "../functions";
import posed from "react-pose";

const Box = posed.div({
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: -200,
  },
});

const Pages = () => {
  const [open, setOpen] = useState(false);
  const store = useContext(StoreContext);
  const pageCount = Math.ceil(store.Films.totalResults / 10);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const clickHandler = (e) => {
    store.SearchParams.page = e.target.value;
    getFilms(store);
  };
  useEffect(() => {
    store.Films.totalResults ? setOpen(true) : null;
  }, [store.Films]);
  return useObserver(() => (
    <Box className="pages" pose={open ? "open" : "closed"}>
      <ul id={store.Films.totalResults}>
        {pages.map((page) => {
          return (
            <li
              key={page}
              value={page}
              onClick={clickHandler}
              className={page === store.SearchParams.page ? "active" : null}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </Box>
  ));
};
export default Pages;
