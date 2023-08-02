import {
  AFTER_MOVIE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  BEFORE_MOVIE,
  BASA_DON,
} from "./action";
import { movies } from "./movies";
const initialState = {
  sira: 0,
  movies: movies,
  favourites: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AFTER_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case BEFORE_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case BASA_DON:
      return {
        ...state,
        sira: 0,
      };
    case ADD_FAVORITE: {
      const favoriteMovie = action.payload;
      if (state.favourites.every((movie) => movie.id !== favoriteMovie.id))
        return {
          ...state,
          favourites: [...state.favourites, favoriteMovie],
          movies: [
            ...state.movies.filter((movie) => movie.id !== favoriteMovie.id),
          ],
        };
      const favoriteMovies = [...state.movies, favoriteMovie];
      return {
        ...state,
        movies: favoriteMovies,
      };

      //return { ...state, favourites: [...state.favourites, favoriteMovie] };
    }

    case REMOVE_FAVORITE: {
      console.log(action.payload);
      const newFavMovies = state.favourites.filter(
        (favMovie) => action.payload !== favMovie.id
      );
      const favMovie = state.favourites.find(
        (favMovie) => action.payload === favMovie.id
      );
      state.movies.push(favMovie);
      return {
        ...state,
        favourites: newFavMovies,
      };
    }
    default:
      return state;
  }
};
export default reducer;
