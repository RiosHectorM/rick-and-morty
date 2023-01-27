import styles from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
     const { value } = e.target;
     setCharacter(value);
   };
  
   function getRandomInt() {
     return (Math.floor(Math.random() * 826).toString());
  };
  
   return (
     <div className={styles.barra}>
       <button
         onClick={() => props.onSearch(getRandomInt())}
         className={styles.botonSearch}
       >
         Random
       </button>
       <input
         type="search"
         placeholder="Buscar"
         onChange={handleChange}
         className={styles.inputSearch}
       />
       <button
         onClick={() => props.onSearch(character)}
         className={styles.botonSearch}
       >
         Agregar
       </button>
     </div>
   );
}
