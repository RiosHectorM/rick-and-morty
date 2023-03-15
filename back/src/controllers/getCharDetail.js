const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail = async (req, res) => {
  const { id } = req.params

  try {
    const result = await axios(`${URL}${id}`)
    const data = result.data

    const character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
    }
    console.log(character)
    res.status(200).json(character)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = getCharDetail;
