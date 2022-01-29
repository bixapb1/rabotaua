import { FAVORITES, DISLIKE, FILE, ERROR } from "./types";

export function setFavorites(card) {
  return { type: FAVORITES, payload: card };
}
export function setDislike(card) {
  return { type: DISLIKE, payload: card };
}
export function setFile(file) {
  return { type: FILE, error: null, payload: file };
}
export function setError(error) {
  return { type: ERROR, payload: error };
}
