import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import styles from './Detail.module.css';

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://rick-and-morty-production-f7fc.up.railway.app/rickandmorty/detail/${detailId}`
    )
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        window.alert('No hay personajes con ese ID');
        setIsLoading(false);
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.container}>
      {isLoading ? <Loader /> : null}
      {!isLoading ? (
        <div className={styles.personcontainer}>
          <div className={styles.info}>
            <h1>
              #{character.id} {character.name}
            </h1>
            <p>Gender:</p>
            <h2> {character.gender}</h2>
            <p>Species:</p>
            <h2>{character.species}</h2>
            <p>Origin:</p>
            <h2>{character.origin?.name}</h2>
            <p>Location:</p>
            <h2>{character.location}</h2>
          </div>
          <div>
            <img
              className={styles.image}
              src={character.image}
              alt='not found'
            />
          </div>
        </div>
      ) : null}
      {!isLoading ? (
        <Link to='/home' className={styles.link}>
          <button className={styles.toHome}>Home</button>
        </Link>
      ) : null}
    </div>
  );
}
