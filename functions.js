import axios from "axios";

export const getFilms = async (store) => {
  //Dönen sonuçların içerisinde imdb puanları yok.
  console.log(store.Films);
  await axios
    .get(
      `http://www.omdbapi.com/?s=${store.SearchParams.title}&y=${store.SearchParams.year}&page=${store.SearchParams.page}&apikey=7510227d`
    )
    .then((res) => {
      if (res.data.Search) {
        store.Films = res.data;
      } else {
        store.Films.Search = ["bulunumadı"];
        store.Films.totalResults = 0;
      }
    });
};

export const toggleFavorites = (store, { id, title, poster, year }) => {
  const Film = {
    imdbID: id,
    Title: title,
    Poster: poster,
    Year: year,
  };
  const index = store.Favorites.map((film) => {
    return film.imdbID;
  }).indexOf(id);

  index === -1 ? store.Favorites.push(Film) : store.Favorites.splice(index, 1);
  localStorage.setItem("Favorites", JSON.stringify(store.Favorites));
};
