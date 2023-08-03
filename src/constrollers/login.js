const userAuthentication = (request, response) => {
    const { email, password } = request.query;
    const usersRegistered = require('../utils/users');
    const authentication = usersRegistered.find(user => {
        return user.email === email && user.password === password;
    })
    if (!authentication) {
        response.status(200).send({
            "access": false
        })
    } else {
        response.status(200).send({
            "access": true
        })
    }
}

module.exports = userAuthentication;