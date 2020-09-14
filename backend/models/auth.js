const knex = require('./../utils/db');

const auth = async(email, password) => {

    try {
        const users = await knex(process.env.DB_T_USUARIOS)
            .select(`${process.env.DB_T_USUARIOS}.id AS id`,
                `${process.env.DB_T_USUARIOS}.name AS name`,
                `${process.env.DB_T_USUARIOS}.email AS email`)

        .where(`${process.env.DB_T_USUARIOS}.activated`, 1)
            .andWhere(`${process.env.DB_T_USUARIOS}.email`, email)
            .andWhere(`${process.env.DB_T_USUARIOS}.password`, password);

        return users;

    } catch (error) {
        throw error;

    }
}

const resiveMailId = async(email) => {
    try {
        return await knex(process.env.DB_T_USUARIOS).select(`${process.env.DB_T_USUARIOS}.id`)
            .where(`${process.env.DB_T_USUARIOS}.email`, email)
            .andWhere(`${process.env.DB_T_USUARIOS}.activated`, 1);


    } catch (error) {
        throw error;
    }
}

const updateUser = async(id, password) => {
        try {

            return knex(process.env.DB_T_USUARIOS)
                .where(`${process.env.DB_T_USUARIOS}.id`, id)
                .update(`${process.env.DB_T_USUARIOS}.password`, password);
        } catch (error) {
            throw (error);

        }
    }
    /*const updatePasswordWithId = async(id_user, password) => {
        try {
            return await knex(process.env.DB_T_USUARIOS)
                .where(`id`, id_user)
                .update(`password`, password);

        } catch (error) {
            throw error;
        }
    }*/

module.exports = {
    auth,
    updateUser,
    resiveMailId
}