const knex = require('./../utils/db');


const createUser = async(obj) => {
    try {
        return await knex(process.env.DB_T_USUARIOS).insert(obj);

    } catch (error) {
        throw error;
    }
}

const verifyUser = async(obj) => {
    try {
        return await knex(process.env.DB_T_USUARIOS)
            .where('verify_code', obj)
            .select('id');


    } catch (error) {
        throw error
    }
}

const update = async(id, obj) => {
    try {
        return await knex(process.env.DB_T_USUARIOS)
            .where('id', id)
            .update(obj);


    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    verifyUser,
    update
}