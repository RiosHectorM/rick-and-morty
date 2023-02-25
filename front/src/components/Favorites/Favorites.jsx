import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards, getFavorite } from "../../redux/actions.js";

export const Favorites = ({ myFavorites, onClose }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFavorite());
  }, []);

  function ordenar(e) {
    dispatch(orderCards(e.target.value));
  }
  function filtrar(e) {
    dispatch(filterCards(e.target.value));
  }

  function handleClose(id) {
    onClose(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label>Ordenar:</label>
        <select
          className={styles.select}
          onChange={ordenar}
          name="orden"
          id="orden"
        >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <label>Filtrar:</label>
        <select
          className={styles.select}
          onChange={filtrar}
          name="filtro"
          id="filtro"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.containerCards}>
        {myFavorites.map((character) => (
          <Card
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={() => handleClose(character.id)}
          />
        ))}
      </div>
    </div>
  );
};

export function mapStateToProps(state) {
  return { myFavorites: state.myFavorites };
}

export function mapDispatchToProps(dispatch) {
  return {
    getFavorite: function (character) {
      dispatch(getFavorite());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
