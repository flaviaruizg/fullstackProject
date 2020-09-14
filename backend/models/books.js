const knex = require('./../utils/db');




const createBook = async(obj) => {

    return consulta = await knex(process.env.DB_T_BOOKS)
        .insert(obj);

}
const getAll = async() => {

    return consulta = await knex(process.env.DB_T_BOOKS)
        .select('*');

}
const deleteBook = async(id) => {
    return consulta = await knex(process.env.DB_T_BOOKS)
        .where('id', id)
        .del();

}
const singleBook = async(id) => {

    try {
        return consulta = await knex(process.env.DB_T_BOOKS)
            .where('id', id)
            .select(

                `${process.env.DB_T_BOOKS}.id`,
                `${process.env.DB_T_BOOKS}.title`,
                `${process.env.DB_T_BOOKS}.author`,
            )


    } catch (error) {
        throw error;
    }
}
const updateBook = async(id, obj) => {

    try {
        return consulta = await knex(process.env.DB_T_BOOKS)
            .where('id', id).update(obj);

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createBook,
    getAll,
    deleteBook,
    singleBook,
    updateBook

}