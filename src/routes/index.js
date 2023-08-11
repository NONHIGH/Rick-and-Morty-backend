const express = require('express');
const routeCharacters = express.Router();

const getCharById = require('../constrollers/getCharById');
const deleteFav = require('../constrollers/deleteFav');
const postFav = require('../constrollers/postFav');
const login = require('../constrollers/login');
const register = require('../constrollers/postUser');

routeCharacters.get('/character/:id', getCharById);
routeCharacters.post('/register', register);
routeCharacters.get('/login', login);
routeCharacters.post('/fav', postFav);
routeCharacters.delete('/fav/:id', deleteFav);


module.exports = routeCharacters
