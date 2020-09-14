const knex = require('./../utils/db');

const contactCreate = async(obj) => {

    try {
        return await knex(process.env.DB_T_CONTACTO).insert(obj);
    } catch (error) {
        throw error;
    }

}

module.exports = {
    contactCreate
}