const { Favorite } = require('../DB_connection');

const postFav = async (request, response) => {
    try {
        console.log(request.body);
        const { name, origin, status, image, species, gender, id } = request.body;
        if (!name || !origin || !status || !image || !species || !gender || !id) {
            return response.status(400).send({
                "error": "Faltan datos"
            });
        }
        const [character, created] = await Favorite.findOrCreate({
            where: { name },
            defaults: { name, origin, image, status, species, gender, id }
        });
        if (created) {
            const favs = await Favorite.findAll()
            return response.status(200).send(favs);
        }
        return response.status(400).send({
            "error": "ya existe este valor en la db"
        })


    } catch (error) {
        return response.status(500).send({
            "error": error.message
        })
    }
}

module.exports = postFav;