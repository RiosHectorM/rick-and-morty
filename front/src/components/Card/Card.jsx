import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { deleteFavorite, addFavorite } from "../../redux/actions.js";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      const character = {
        id: props.id,
        name: props.name,
        image: props.image,
        species: props.species,
        gender: props.gender,
      };
      props.addFavorite(character);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imagewrapper}>
        <img src={props.image} alt="char" />
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
        <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
          <h1>#{props.id} - {props.name}</h1>
        </Link>
        <div className={styles.data}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </div>
  );
}
export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (character) {
      dispatch(addFavorite(character));
    },
    deleteFavorite: function (id) {
      dispatch(deleteFavorite(id));
    },
  };
}
export function mapStateToProps(state) {
  return { myFavorites: state.myFavorites };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
