const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getChatById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(`${URL}${id}`);
    const charApi = response.data;
    let character = {
      id: charApi.id,
      image: charApi.image,
      name: charApi.name,
      gender: charApi.gender,
      species: charApi.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: "Character not found: " + error.message });
  }
};

module.exports = getChatById;
