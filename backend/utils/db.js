const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME
    },
    pool: { min: 2, max: 8 }
})

module.exports = knex;