import Card from '../Card/Card.jsx';
import React from "react";
import styles from './Cards.module.css'

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.divStyle}>
      {characters.map((character) => (
        <Card
          key={character.name}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}