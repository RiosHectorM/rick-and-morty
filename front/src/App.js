import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteFavorite } from "./redux/actions.js";

import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const username = "mail@mail.com";
  const password = "asd123";

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  // const onSearch = (character) => {
  //   fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     });
  // };

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        const found = characters.find((char) => char.id === data.id);
        if (data.name) {
          if (!found) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Ese personaje ya fue agregado");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };


  const onClose = (id) => {
    dispatch(deleteFavorite(id));
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="layout">
      <div className="panelLat">
        {location.pathname !== "/" && <Navbar onSearch={onSearch} />}
      </div>
      <div className="panelMain">
        <Routes>
          <Route exact path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites onClose={onClose} />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
