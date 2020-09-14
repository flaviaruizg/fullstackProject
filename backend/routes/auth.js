const express = require('express');
const router = express.Router();
const service = require('./../models/auth');
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const auth = async(req, res, next) => {

    try {

        const { email, password } = req.body;
        const result = await service.auth(email, sha1(password));
        console.log(sha1(password));
        console.log(result[0]);
        if (result.length > 0) {


            const { id, name, email } = result[0];
            const payload = { id, name, email };
            const privateKey = fs.readFileSync('./utils/keys/private.pem', 'utf-8');
            const signOptions = { expiresIn: '2h', algorithm: 'RS256' };

            const token = jwt.sign(payload, privateKey, signOptions);
            res.json({ name, email, JWT: token });

        } else {
            res.json({ message: 'unauthorized', JWT: null });
        }

    } catch (error) {

        res.sendStatus(500);

    }
}

router.post('/', auth);

module.exports = router;