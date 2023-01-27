import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className={styles.containerNav}>
      <div className={styles.links}>
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/favorites">FAVORITES</Link>
      </div>
      <button onClick={props.logout}>Logout</button>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default Navbar