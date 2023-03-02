import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  return (
    <div className={style.container}>
      <div className={style.containerDivs}>
        <div className={style.navItems}>
          <a href="https://rickandmortyapi.com/">
          <img src="rymlogo.png" alt="LogoRyM" /></a>
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
        {location.pathname === "/home" && (
          <SearchBar onSearch={props.onSearch} />
        )}
      </div>
    </div>
  );
}
