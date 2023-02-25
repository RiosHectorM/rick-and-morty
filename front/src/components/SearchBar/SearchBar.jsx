import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCharacter(value);
  };

  const handleClick = () => {
    props.onSearch(character);
    setCharacter("");
    document.getElementById("searchInput").value = "";
  };

  function getRandomInt() {
    return Math.floor(Math.random() * 826).toString();
  }

  return (
    <div className={style.inputSearch}>
      <input
        type="search"
        placeholder="Search ID"
        id="searchInput"
        onChange={handleChange}
      />
      <button className={style.button} onClick={handleClick}>
        Add Character
      </button>
      <button
        className={style.button}
        onClick={() => props.onSearch(getRandomInt())}
      >
        Random Character
      </button>
    </div>
  );
}
