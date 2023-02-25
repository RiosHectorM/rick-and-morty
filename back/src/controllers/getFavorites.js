const favorites = require("../utils/favs");

const getFavorites = (req, res) => {
  try {
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getFavorites;
