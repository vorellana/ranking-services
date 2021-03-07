const { Router } = require('express');
const { verifyToken } = require('../middlewares/authJwt');
const router = Router();

const{ 
    getRanked,
    
} = require('../services/ranked.service')

const base = '/api/ranked';

router.get(base, [verifyToken], getRanked);

module.exports = router;