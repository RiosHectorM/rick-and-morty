import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className={style.container}>
      <div className={style.containerDivs}>
        <div className={style.navItems}>
          <img src="rymlogo.png" alt="LogoRyM" />
          <Link className={style.link} to="/about">
            About
          </Link>
          <Link className={style.link} to="/favorites">
            Favorites
          </Link>
          <Link className={style.link} to="/home">
            Home
          </Link>
        </div>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
