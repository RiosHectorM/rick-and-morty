import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      
      <div className={styles.ab}>
        <p>
          My name is Hector Martin Rios. I'm a Full Stack Developer.
          <br></br>
          <br></br>
          This application is developed with Javascript, CSS and React.<br></br>
          <br></br>
          It is an application that allows you to obtain information about the
          Rick and morty characters from the Rick and morty public API.
        </p>
        <Link to={`/home`} style={{ textDecoration: "none"}}>
          <h3 className={styles.like}>Let's Start!</h3>
        </Link>
      </div>
      <br></br>
    </div>
  );
}
