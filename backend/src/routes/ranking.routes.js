const { Router } = require('express');
const { verifyToken } = require('../middlewares/authJwt');
const router = Router();

const{ 
    getRanking,
    getRankingBoard
} = require('../services/ranking.service')

const base = '/api/ranking';

router.get(base, [verifyToken], getRanking);
router.post(base + '/board', [verifyToken], getRankingBoard);

module.exports = router;