import React from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import logo from "./rymlogo.png";

export default function Form(props) {
  //ESTADO INCIAL CARGADO PARA EVITAR DEMORAS
  const [userData, setUserData] = React.useState({
    username: "mail@mail.com",
    password: "asd123",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <img className={styles.imglogo} src={logo} alt="rymlogo" />
      {/* <h1 className={styles.title}>Rick & Morty App</h1> */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={errors.username && styles.warning}
        />
        <p className={styles.danger}>{errors.username}</p>

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={errors.password && styles.warning}
        />
        <p className={styles.danger}>{errors.password}</p>

        <button type="submit" className={styles.btn}>
          Sign In
        </button>
      </form>
    </div>
  );
}
