const express = require('express');
const router = express.Router();
const service = require('./../models/signup');

const verify = async(req, res, next) => {

    try {
        const result = await service.verifyUser(req.params.verify_code);
        const obj = {
            activated: 1
        }

        result ? (service.update(result[0].id, obj), res.sendStatus(200)) : res.sendStatus(400);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

router.get('/:verify_code', verify);

module.exports = router;