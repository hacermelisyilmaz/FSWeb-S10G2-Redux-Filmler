import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
      };
    case ADD_FAVORITE:
      return {
        ...state,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
