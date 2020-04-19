import React, { useContext, useState } from "react";
import { StoreContext } from "../store";
import axios from "axios";

const initialState = {
  title: "",
  year: "",
  plot: "",
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
    await axios
      .get(
        `http://www.omdbapi.com/?s=${state.title}&y=${state.year}&apikey=7510227d`
      )
      .then((res) => {
        store.Films = res.data;
      });
  };
  return (
    <div id="SearchBox">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="title"
          placeholder="Film İsmi"
          onChange={changeTitleHandler}
        />
        <input
          type="number"
          placeholder="Filmin Çıkış Yılı"
          onChange={changeYearHandler}
        />
        <select name="plot">
          <option>Short</option>
          <option>Full</option>
        </select>
        <button type="submit" className="btn btn-warning">
          Ara
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
