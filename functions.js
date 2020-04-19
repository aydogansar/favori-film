import axios from "axios";

export const getFilms = async (store) => {
  console.log(store.Films);
  //Dönen sonuçların içerisinde imdb puanları yok.
  await axios
    .get(
      `http://www.omdbapi.com/?s=${store.SearchParams.title}&y=${store.SearchParams.year}&page=${store.SearchParams.page}&apikey=7510227d`
    )
    .then((res) => {
      store.Films = res.data;
    });
};

export const toggleFavorites = (store, { id, title, poster, year }) => {
  const Film = {
    id,
    title,
    poster,
    year,
  };
  const index = store.Favorites.map((film) => {
    return film.id;
  }).indexOf(id);
  index === -1 ? store.Favorites.push(Film) : store.Favorites.splice(index, 1);

  localStorage.setItem("Favorites", JSON.stringify(store.Favorites));
  console.log(store.Favorites);
};
