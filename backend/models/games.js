const { query } = require('express');
const knex = require('./../utils/db');


const gamesAll = async() => {

    return consulta = await knex(process.env.DB_T_GAMES)
        .select('*');
}



module.exports = {
    gamesAll

}