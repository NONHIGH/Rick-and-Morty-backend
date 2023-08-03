const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (request, response) => {
    try {
        const { id } = request.params;
        const infoApi = (await axios(URL + id)).data


        const character = {
            id: infoApi.id,
            name: infoApi.name,
            status: infoApi.status,
            species: infoApi.species,
            image: infoApi.image,
            gender: infoApi.gender,
            origin: infoApi.origin.name
        }
        return character.name ?
            response.json(character) :
            response.status(404).send({
                "error": "Character not found"
            })
    } catch (error) {
        return response.status(500).send({
            "error": "Server not response"
        })
    }
}


module.exports = getCharById