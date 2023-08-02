export const AFTER_MOVIE = "AFTER_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const BEFORE_MOVIE = "BEFORE_MOVIE";
export const BASA_DON = "BASA_DON";

export const addFavorite = (movies) => {
  return { type: ADD_FAVORITE, payload: movies };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
export function afterMovie() {
  return { type: AFTER_MOVIE };
}
export function beforeMovie() {
  return { type: BEFORE_MOVIE };
}
export function basaDon() {
  return { type: BASA_DON };
}
