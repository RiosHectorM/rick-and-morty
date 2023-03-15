import { connect, useDispatch } from 'react-redux';
import {
  filterCards,
  orderCards,
  /* getFavorite */ deleteFavorite,
} from '../../redux/actions/actions';

import Card from '../Card/Card.jsx';
import styles from './Favorites.module.css';

export const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  ///////////////////////////////
  const handleDispatch = (e) => {
    const { name, value } = e.target;

    if (name === 'order') {
      return dispatch(orderCards(value));
    }
    if (name === 'filter') {
      return dispatch(filterCards(value));
    }
  };
  ////////////////////////////////////
  function handleClose(id) {
    dispatch(deleteFavorite(id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label>Ordenar:</label>
        <select
          className={styles.select}
          name='order'
          onChange={handleDispatch}
        >
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>

        <label>Filtrar:</label>
        <select
          className={styles.select}
          name='filter'
          onChange={handleDispatch}
        >
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>

        {/* <button className={styles.buttonReset} onClick={handleReset}>
          Reset Filter
        </button> */}
      </div>

      <div className={styles.containerMain}>
        <div className={styles.containerCards}>
          {myFavorites.map((character) => (
            <Card
              name={character.name}
              id={character.id}
              key={character.name}
              gender={character.gender}
              image={character.image}
              species={character.species}
              status={character.status}
              origin={character.origin}
              onClose={() => handleClose(character.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);