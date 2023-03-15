const { Character } = require('../DB_connection');

const getAllChars = async (req, res) => {
  try {
    const allChars = await Character.findAll();
    res.status(200).json(allChars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports =  getAllChars ;
