import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
    <div>
      <Link to="/home">
        <button>To Home</button>
      </Link>
      <h1>{character.name}</h1>
      <h2>{character.gender}</h2>
      <h2>{character.origin?.name}</h2>
      <h2>{character.location?.name}</h2>
      <img src={character.image} alt="out of service" />
    </div>
  );
}
