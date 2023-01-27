import React from "react";
import { useState } from "react";
import { validate } from "./validation";

function Form({ loguin }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loguin(userData);
  };

  return (
    <>
      <h1>Inicio de sesion</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          type="email"
          name="username"
          id="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Form;
