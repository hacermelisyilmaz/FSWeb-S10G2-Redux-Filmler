export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (movieData) => {
  return { type: ADD_MOVIE, payload: movieData };
};
