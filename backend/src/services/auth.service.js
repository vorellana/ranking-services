const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const exp = {};
const { getPoolCon } = require('../utils/connection-db');

exp.signin = async(req, res) => {
    try {
        const { userName, password } = req.body;
        const strQuery = 'SELECT * FROM public.user WHERE user_name = $1';
        const response = await getPoolCon().query(strQuery,[userName]);

        if(response.rows.length > 0){ // si encontró el usuario
            const result = await bcrypt.compare(password, response.rows[0].password);
            if (result){
                const firstName = response.rows[0].first_name;
                const idUser = response.rows[0].id_user;
                const payload = {idUser, userName, firstName};// too store data
                let options = { expiresIn: 60 * 60 * 24};
                const token = jwt.sign(payload, config.secret, options);
                res.json({auth: true, message: "logged in", token})
            } else {
                res.json({auth: false, message: "Password not found"})
            }
        }else{
            res.json({auth: false,message: "User not found"})
        }
    } catch (error) {
        res.json({auth: false, error});
    }
};


module.exports = exp;