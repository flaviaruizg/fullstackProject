const express = require('express');

const router = express.Router();
const service = require('./../models/games');


const all = async(req, res) => {
    try {
        const result = await service.gamesAll();
        res.json({ games: result });

    } catch (error) {
        console.log(error)
        res.sendStatus(500);


    }
}



router.get('/', all);

module.exports = router;