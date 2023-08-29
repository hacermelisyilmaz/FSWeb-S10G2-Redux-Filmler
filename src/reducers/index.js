import { combineReducers } from "redux";

import movieReducer from "./movieReducer.js";
import favoritesReducer from "./favoritesReducer.js";

const reducers = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});

export default reducers;
