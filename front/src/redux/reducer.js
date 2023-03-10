const {
  ADD_FAVORITE,
  GET_FAVORITE,
  DELETE_FAVORITE,
  ORDER,
  FILTER,
} = require("./actions.js");
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    case GET_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    
    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter(
          (item) => item.gender === action.payload
        ),
      };
    case ORDER:
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: [...state.myFavorites].sort((p1, p2) =>
            p1.id > p2.id ? 1 : p1.id < p2.id ? -1 : 0
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites].sort((p1, p2) =>
            p1.id < p2.id ? 1 : p1.id > p2.id ? -1 : 0
          ),
        };
      }

    default:
      return state;
  }
};

export default rootReducer;
