const { Favorite } = require('../DB_connection');

const getFavorit = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = getFavorit;
