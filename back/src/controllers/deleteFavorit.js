const { Favorite } = require('../DB_connection');

const deleteFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Favorite.destroy({ where: { id: id } });

    if (result === 1) {
      res.status(200).json({ message: `Favorite with ID ${id} was deleted` });
    } else {
      res.status(404).json({ message: `Favorite with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFavorite;

