import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards, getFavorite } from "../../redux/actions.js";

const itemsPage = 10;

export const Favorites = ({ myFavorites, onClose }) => {
  const dispatch = useDispatch();

  /////////////////////////
  const favo = myFavorites.length;

  const [currentPage, setCurrentPage] = useState(0);

  const [items, setItems] = useState([...myFavorites].splice(0, itemsPage));

  const [totalPage, setTotalPage] = useState(
    Math.ceil(myFavorites.length / itemsPage, 1)
  );

  /////////////////////////////

  React.useEffect(() => {
    dispatch(getFavorite());
    setItems([...myFavorites].splice(currentPage * itemsPage, itemsPage));
    setTotalPage(Math.ceil(myFavorites.length / itemsPage, 1));
  }, [favo]);

  function ordenar(e) {
    if (e.target.value === "reset") {
      document.getElementById("orden").selectedIndex = 0;
      document.getElementById("filtro").selectedIndex = 0;
      dispatch(getFavorite());
    } else {
      document.getElementById("filtro").selectedIndex = 0;
      dispatch(orderCards(e.target.value));
    }
  }
  function filtrar(e) {
    if (e.target.value === "reset") {
      document.getElementById("orden").selectedIndex = 0;
      document.getElementById("filtro").selectedIndex = 0;
      dispatch(getFavorite());
    }
    document.getElementById("orden").selectedIndex = 0;
    dispatch(filterCards(e.target.value));
  }
  function handleClose(id) {
    onClose(id);
  }
  function handleFilter() {
    document.getElementById("orden").selectedIndex = 0;
    document.getElementById("filtro").selectedIndex = 0;
    dispatch(getFavorite());
  }

  /////////////////////////////////////

  const nextHandler = () => {
    const totalElem = myFavorites.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPage;
    if (firstIndex >= totalElem) return;
    setItems([...myFavorites].splice(firstIndex, itemsPage));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * itemsPage;
    setItems([...myFavorites].splice(firstIndex, itemsPage));
    setCurrentPage(prevPage);
  };

  if (items.length === 0) {
    prevHandler();
  }

  ////////////////////////////////////

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label>Ordenar:</label>
        <select
          className={styles.select}
          onChange={ordenar}
          name="orden"
          id="orden"
          placeholder="Seleccione una Opcion"
        >
          <option value="reset">Ordering...</option>
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
          <option value="reset">Filter...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>

        <button className={styles.buttonReset} onClick={handleFilter}>
          Reset Filter
        </button>
      </div>
      <div className={styles.containerMain}>
        <div className={styles.containerCards}>
          {items.map((character) => (
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
        {myFavorites.length > itemsPage && (
          <div className={styles.buttonsContainer}>
            <div className={styles.buttons}>
              <button onClick={prevHandler}>Prev</button>
              <h1>
                Page {currentPage + 1} / {totalPage}
              </h1>
              <button onClick={nextHandler}>Next</button>
            </div>
          </div>
        )}
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
