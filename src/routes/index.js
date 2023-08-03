const express = require('express');
const routeCharacters = express.Router();

const getCharById = require('../constrollers/getCharById');
const {deleteFav, postFav} = require('../constrollers/handleFavorites');
const login = require('../constrollers/login');

routeCharacters.get('/character/:id', getCharById);
routeCharacters.get('/login', login);
routeCharacters.post('/fav', postFav);
routeCharacters.delete('/fav/:id', deleteFav);


module.exports = routeCharacters
