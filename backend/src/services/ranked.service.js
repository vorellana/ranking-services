const exp = {};

const { getPoolCon } = require('../utils/connection-db');

exp.getRanked = async(req, res) => {
    const response = await getPoolCon().query('SELECT * FROM public.ranked');
    console.log(response.rows);
    res.json(response.rows);
}

module.exports = exp;