const axios = require('axios');
const  { Character }  = require('../DB_connection');


const getApiData = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page: 1,
      },
    });
    console.log(`Received response with status ${response.status}`);
    const characters = response.data.results.slice(0, 100).map((Character) => ({
      id: Character.id,
      name: Character.name,
      species: Character.species,
      status: Character.status,
      origin: Character.origin.name,
      gender: Character.gender,
      image: Character.image,
    }));
    console.log(`Mapped ${characters.length} characters from API data`);
    return characters;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const saveApiData = async () => {
    try {
      const charactersData = await getApiData();
      for (const characterData of charactersData) {
        await Character.findOrCreateCharacter({
          where: { id: characterData.id },
          defaults: characterData,
        });
      }
      console.log(`Saved ${charactersData.length} characters to the database`);
    } catch (error) {
      console.error(error);
    }
  };


module.exports = {
  getApiData,
  saveApiData,
};
