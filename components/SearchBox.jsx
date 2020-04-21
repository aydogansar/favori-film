import React, { useContext, useState } from "react";
import { StoreContext } from "../store";
import { getFilms } from "../functions";

const initialState = {
  title: "",
  year: "",
};

const SearchBox = () => {
  const store = useContext(StoreContext);
  const [state, setState] = useState(initialState);
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
    const { title, year } = state;
    store.SearchParams = {
      title,
      year,
      page: 1,
    };
    getFilms(store);
  };
  return (
    <div id="SearchBox">
      <div className="searchContainer">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="title"
            placeholder="Film İsmi"
            onChange={changeTitleHandler}
          />
          <input
            type="number"
            className="year"
            placeholder="Çıkış Yılı"
            onChange={changeYearHandler}
          />
          <button type="submit" className="btn btn-warning">
            Ara
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchBox;
