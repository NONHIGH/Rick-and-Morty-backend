const { User } = require('../DB_connection');

const postUser = async (request, response) => {
    try {
        const { email, password } = request.body;
        if ((email === '' || password === '') && (!email || !password)) {
            return response.status(400).send({
                "error": "Faltan datos"
            });
        }
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: { email, password }
        })
        if (!created) {
            return response.status(400).send({
                "error": "Este email ya esta en uso"
            });
        }
        return response.status(200).send(user);

    } catch (error) {
        return response.status(500).send({
            "error": error.message
        });
    }

}

module.exports = postUser;