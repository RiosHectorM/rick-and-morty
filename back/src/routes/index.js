const { Router } = require('express')
// Controllers
const getChatById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');
const getFavorites = require('../controllers/getFavorites.js');
const postFavorites = require('../controllers/postFavorite.js');
const deleteFavorite = require('../controllers/deleteFavorite.js');

const router = Router();

router.get('/onsearch/:id', getChatById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFavorites);
router.get("/fav", getFavorites);
router.delete('/fav/:id', deleteFavorite)

module.exports = { router }