const { json } = require('sequelize');
const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
  try {
    const character = req.body;
    character.origin = JSON.stringify(character.origin);
    const newFavorite = await Favorite.create(character);
    res.status(201).json(newFavorite);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = postFav;
