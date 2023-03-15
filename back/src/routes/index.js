const { Router } = require('express')
// Controllers
const getChatById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorit = require('../controllers/getFavorit');
const postFavorit = require('../controllers/posFavorit');
const deleteFavorit = require('../controllers/deleteFavorit');
const getAllChars = require('../controllers/getAllChars');

const router = Router();

router.get('/allCharacters', getAllChars);
router.get('/onsearch/:id', getChatById);
router.get('/detail/:id', getCharDetail);

router.get('/fav', getFavorit);
router.post('/fav', postFavorit);
router.delete('/fav/:id', deleteFavorit);

module.exports = { router };