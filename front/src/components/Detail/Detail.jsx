import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.container}>
      <div className={styles.personcontainer}>
        <div className={styles.info}>
          <h1>
            #{character.id} {character.name}
          </h1>
          <h2>Gender: {character.gender}</h2>
          <h2>Species:{character.species}</h2>
          <h2>Origin: {character.origin}</h2>
          <h2>Location: {character.location}</h2>
        </div>
        <div>
          <img className={styles.image} src={character.image} alt="not found" />
        </div>
      </div>
        <Link to="/home" className={styles.link}>
          <button className={styles.toHome}>Home</button>
        </Link>
    </div>
  );
}
