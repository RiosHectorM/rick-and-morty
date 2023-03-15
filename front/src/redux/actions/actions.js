import axios from 'axios';
import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER, /* GET_FAVORITE */ } from "./types.js";


/* export const getFavorite = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/rickandmorty/fav');
      return dispatch({
        type: GET_FAVORITE,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};
 */

export const addFavorite = (props) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/rickandmorty/fav", {
        id: props.id,
        gender: props.gender,
        image: props.image,
        name: props.name,
        species: props.species,
        status: props.status,
        origin: props.origin
      });
      const data = await response.data;
      dispatch({ type: ADD_FAVORITE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      console.log(response); // Agregado para verificar la respuesta del backend
      dispatch({ type: DELETE_FAVORITE, payload: id });
    } catch (error) {
      console.error(error);
    }
  };
};



export function filterCards(status) {
    return {
      type: FILTER,
      payload: status
    }
  }
  
export function orderCards(id) {
    return {
      type: ORDER,
      payload: id
    }
  }