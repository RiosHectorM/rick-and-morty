import Card from "../Card/Card.jsx";
import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";

const itemsPage = 10;

export default function Cards(props) {
  const [datosFromApi, setDatosFromApi] = useState(props.characters);

  const [items, setItems] = useState([...props.characters].splice(0, 10));

  const [currentPage, setCurrentPage] = useState(0);

  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setItems([...props.characters].splice(currentPage * itemsPage, itemsPage));
    setTotalPage(Math.ceil(props.characters.length / itemsPage, 1))
    setDatosFromApi(props.characters);
  }, [props.characters]);

  const nextHandler = () => {
    const totalElem = datosFromApi.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPage;
    if (firstIndex >= totalElem) return;
    setItems([...datosFromApi].splice(firstIndex, itemsPage));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * itemsPage;
    setItems([...datosFromApi].splice(firstIndex, itemsPage));
    setCurrentPage(prevPage);
  };

  if (items.length === 0) {
    prevHandler();
  }

  if (props.characters.length <= itemsPage * (currentPage + 1) + 1) {
    nextHandler();
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.container}>
        {items.map((character) => (
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
      {props.characters.length > itemsPage && (
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <button onClick={prevHandler}>Prev</button>
            <h1>Page {currentPage + 1} / {totalPage}</h1>
            <button onClick={nextHandler}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
