import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { Routes, Route } from "react-router-dom";

import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
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
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const username = "mail@mail.com";
  const password = "Pass123*";

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  function loguin(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  }

   function logout() {
       setAccess(false);
       navigate("/");
   }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div>
      {useLocation().pathname !== "/" && (
        <Navbar onSearch={onSearch} logout={logout} />
      )}
      <Routes>
        <Route path="/" element={<Form loguin={loguin} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
