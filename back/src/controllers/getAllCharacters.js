const router = require("express").Router();
const getAllCharacters = require("../controllers/getAllCharacters");
const {character} = require("../DB_connection");   



router.get("/all", async (req, res) => {
  
  try {
    res.json(await character.findAll());
  } catch (error) {
    res.status(500).json({error:error.message});
  }
  
});

module.exports = router;