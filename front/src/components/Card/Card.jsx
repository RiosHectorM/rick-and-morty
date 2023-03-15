import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

export function Card(props) {
  const { name, species, gender, image } = props;
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.id, props.myFavorites]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imagewrapper}>
        <img src={image} alt='char' />
      </div>
      <div className={styles.buttonContainer}>
        <div>
          {isFav ? (
            <button className={styles.favOn} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={styles.favOff} onClick={handleFavorite}>
              🤍
            </button>
          )}
        </div>
        <button
          className={styles.close}
          onClick={() => props.onClose(props.id)}
        >
          X
        </button>
      </div>
      <div className={styles.headerwrapper}>
        <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none' }}>
          <h1>
            #{props.id} - {name}
          </h1>
        </Link>
        <div className={styles.data}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (fav) {
      dispatch(addFavorite(fav));
    },

    deleteFavorite: function (id) {
      dispatch(deleteFavorite(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
