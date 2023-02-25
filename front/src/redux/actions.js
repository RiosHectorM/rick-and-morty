import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFavorite(character) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    const data = response.data;
    return dispatch({ type: ADD_FAVORITE, payload: data });
  };
}

export function deleteFavorite(id) {
  return async function (dispatch) {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;
    return dispatch({ type: DELETE_FAVORITE, payload: data });
  };
}

export function getFavorite() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/rickandmorty/fav");
    const data = response.data;
    return dispatch({ type: GET_FAVORITE, payload: data });
  };
}

export function filterCards(genero) {
  return { type: FILTER, payload: genero };
}

export function orderCards(id) {
  return { type: ORDER, payload: id };
}
