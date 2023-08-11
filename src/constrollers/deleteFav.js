const { Favorite } = require('../DB_connection');

const deleteFav = async (request, response) => {
    try {
        const { id } = request.params;
        const found = await Favorite.findByPk(id)
        if (!found) {
            return response.status(404).send({
                "error": "No es encuentra este personaje favorito"
            });
        }
        found.destroy();
        const list = await Favorite.findAll();
        return response.status(200).send(list);
    } catch (error) {
        return response.status(500).send({
            "error": error.message
        })
    }

}

module.exports = deleteFav;

