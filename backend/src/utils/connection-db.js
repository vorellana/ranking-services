const exp = {};

const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'ranking',
    port: '5432'
});

exp.getPoolCon = () => {
    return pool;
}

module.exports = exp;