import Card from '../Card/Card.jsx';
import React from 'react';
import styles from './Cards.module.css';

const Cards = (props) => {
  const { characters, onClose } = props;

  return (
    <div className={styles.containerMain}>
      <div className={styles.container}>
        {characters.map((character) => (
          <Card
            key={character.name}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
            origin={character.origin}
            onClose={() => onClose(character.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
