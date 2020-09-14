const jwt = require('jsonwebtoken');
const fs = require('fs');

SecuredUser = (req, res, next) => {

    try {
        let token = req.headers.authorization;
        token = token.replace('Bearer ', '');

        const publicKey = fs.readFileSync('./utils/keys/public.pem');
        const decoded = jwt.verify(token, publicKey);

        req.id = decoded.id;
        req.name = decoded.name;

        req.id > 0 ? next() : res.status(401).json({ mesagge: 'unathorized' });

    } catch (error) {
        console.error(error);
        res.sendStatus(401);

    }
}

module.exports = {
    SecuredUser
}