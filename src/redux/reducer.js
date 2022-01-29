import { FAVORITES, DISLIKE, FILE, ERROR } from "./types";

const initStore = {
  favorites: [],
  dislikes: [],
  file: [],
  error: null,
};

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    case DISLIKE: {
      return { ...state, dislikes: action.payload };
    }
    case FILE: {
      return { ...state, error: null, file: action.payload };
    }
    case ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
