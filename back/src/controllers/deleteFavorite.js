let favorites = require("../utils/favs");

const deleteFavorite = (req, res) => {
  const { id } = req.params;
  if (id) {
    for (i = 0; i < favorites.length; i++) {
      if (favorites[i].id == id) {
        favorites.splice(i, 1);
      }
    }
    res.status(200).json(favorites);
  }
};

module.exports = deleteFavorite;
