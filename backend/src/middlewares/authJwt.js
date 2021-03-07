const exp = {};
const jwt = require('jsonwebtoken');
const config = require('../config');
const { getPoolCon } = require('../utils/connection-db');

exp.verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) return res.status(403).json({ message: "No token provided" });
  
    try {
        const decoded = jwt.verify(token, config.secret);
        req.idUser = decoded.idUser; // for the next middleware
        const strQuery = 'SELECT * FROM public.user WHERE id_user = $1';
        const response = await getPoolCon().query(strQuery,[decoded.idUser]);

        if (response.rows.length === 0) return res.status(404).json({ auth:false,message: "No user found" });
  
        next();
    } catch (error) {
        return res.status(401).json({ auth: false,message: "Unauthorized!", error });
    }
  };

  module.exports = exp;