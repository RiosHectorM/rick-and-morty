import { DELETE_FAVORITE, ADD_FAVORITE } from "./types";

export function addFavorite(fav){
    return {
        type: ADD_FAVORITE,
        payload: fav
    }
}

export function deleteFavorite(id){
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}