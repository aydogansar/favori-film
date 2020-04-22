import React, { useContext, useState } from "react";
import { StoreContext } from "../store";
import { getFilms } from "../functions";
import { useObserver } from "mobx-react";
import posed from "react-pose";

const Box = posed.div({
  up: {
    y: -5,
  },
  down: {
    y: "40vh",
  },
});

const SearchBox = () => {
  const store = useContext(StoreContext);
  const [state, setState] = useState({
    title: store.SearchParams.title,
    year: store.SearchParams.year,
    page: 1,
  });
  const changeTitleHandler = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };
  const changeYearHandler = (e) => {
    setState({
      ...state,
      year: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { title, year, page } = state;
    store.SearchParams = {
      title,
      year,
      page,
    };
    getFilms(store);
  };
  return useObserver(() => (
    <Box id="SearchBox" pose={store.Films.Search.length === 0 ? "down" : "up"}>
      <div className="searchContainer">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="title"
            placeholder="Film İsmi"
            value={state.title}
            onChange={changeTitleHandler}
          />
          <input
            type="number"
            className="year"
            placeholder="Çıkış Yılı"
            value={state.year}
            onChange={changeYearHandler}
          />
          <button type="submit" className="btn btn-warning">
            Ara
          </button>
        </form>
      </div>
      {store.Films.Search.length === 0 ? (
        <style jsx global>{`
          body {
            background: #293462;
          }
        `}</style>
      ) : null}
    </Box>
  ));
};
export default SearchBox;
