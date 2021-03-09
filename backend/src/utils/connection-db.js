const exp = {};

const { Pool } = require('pg');
const pool = new Pool({
    //host: 'database',
    // host: '192.168.1.53',

    // host: 'localhost',
    // user: 'postgres',
    // password: '123456',
    // database: 'ranking',
    // port: '5432'
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB
});

exp.getPoolCon = () => {
    return pool;
}

module.exports = exp;