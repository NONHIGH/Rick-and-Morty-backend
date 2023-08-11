const { User } = require('../DB_connection');

const login = async (request, response) => {
    try {
        const { email, password } = request.query;
        if (!email || !password) {
            return response.status(400).send({
                "error": "Faltan datos"
            });
        }
        const userFound = await User.findOne({
            where: { email }
        });
        if (!userFound) {
            return response.status(404).send({
                "error": "Usuario no encontrado"
            });
        }
        (userFound.password === password)
            ?
            response.status(200).send({
                "access": true,
                "user_id": userFound.id
            })
            :
            response.status(403).send({
                "error": "Contraseña incorrecta"
            });
    } catch (error) {
        return response.status(500).send({
            "error": error.message
        })
    }

}

module.exports = login;