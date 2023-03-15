import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import  About  from './components/About/About';
import  Detail  from './components/Detail/Detail';
import  Error  from './components/Error/Error';
import  Form  from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import  Loader   from './components/Loader/Loader.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const username = 'mail@mail.com';
  const password = 'ContaseniA..10';


 const login = (userData) => {
   if (userData.password === password && userData.username === username) {
     setAccess(false);
     navigate('/home');
   }
 };

  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
     !access && navigate('/home');
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);
  
  const onSearch = (characterId) => {
    setIsLoading(true);
    fetch(`http://localhost:3001/rickandmorty/onsearch/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const index = characters.findIndex((c) => c.id === data.id);
          if (index === -1) {
            setCharacters((oldChars) => [...oldChars, data]);
            setIsLoading(false);
          } else {
            window.alert('Este personaje ya fue agregado');
            setIsLoading(false);
          }
        } else {
          window.alert('No hay personajes con ese ID');
          setIsLoading(false);
        }
      });
  };

  function onClose(id) {
    setCharacters((oldChars) =>
      oldChars.filter((character) => character.id !== id)
    );
  }



  return (
    <div className='layout'>
      <div className='panelLat'>
        {location.pathname !== '/' && <Navbar onSearch={onSearch} />}
      </div>
      <div className='panelMain'>
        {isLoading ? <Loader /> : null}
        <Routes>
          <Route exact path='/' element={<Form login={login} />} />
          <Route
            path='/home'
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites onClose={onClose} />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
