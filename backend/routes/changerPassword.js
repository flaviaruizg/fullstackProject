const express = require('express');
const router = express.Router();
const service = require('./../models/auth');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const sha1 = require('sha1');

const getToken = async(req, res, next) => {
    try {

        const { token } = req.params;
        console.log(token);
        if (token) {
            const publicKey = fs.readFileSync('./utils/keys/public.pem');
            const decoded = jwt.verify(token, publicKey);
            console.log(decoded);
            if (decoded.id) {

                res.json({ status: true, id: decoded.id });
            } else {
                res.json({ status: true, message: 'Email not found' });
            }
        }

    } catch (error) {
        res.sendStatus(500);
    }
}

const changePassword = async(req, res, next) => {
    try {
        const { id, password } = req.body;

        if (id && password) {
            const result = await service.updateUser(id, sha1(password));

            res.json({ status: true, message: result });
        } else {
            res.json({ status: true, message: 'Email not found' });
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

router.get('/:token', getToken);
router.post('/', changePassword);

module.exports = router;