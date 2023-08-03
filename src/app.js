const express = require('express')
const routerCharacters = require('./routes/index')
const cors = require('cors');
const server = express();
server.use(cors())

server.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
server.use(express.json());
server.use('/rickandmorty', routerCharacters);


module.exports = server