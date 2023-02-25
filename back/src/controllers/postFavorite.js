const favorites = require("../utils/favs");

const postFavorites = (req, res) => {
  try {
    const character = req.body;
    if (character) {
      favorites.unshift(character);
    }
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postFavorites;
