import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className={styles.divSearch}>
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/favorites">FAVORITES</Link>
      <button onClick={props.logout}>Logout</button>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default Navbar