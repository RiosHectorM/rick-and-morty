const { Router } = require("express");

const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorite = require('../controllers/getFavorites');
const getAllChars = require('../controllers/getAllChars');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const router = Router();

router.get("/character/:id", getCharById);
router.get( "/detail/:id", getCharDetail);
router.get('/fav', getFavorite);
router.get('/allCharacters', getAllChars);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = { router }