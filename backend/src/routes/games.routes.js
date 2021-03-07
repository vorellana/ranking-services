const { Router } = require('express');
const { verifyToken } = require('../middlewares/authJwt');
const router = Router();

const{ 
    getGames,
    getGamesByPlayer,
    createGame,
    updateGame,
    deleteGame
} = require('../services/games.service')

const base = '/api/games';

router.get(base, [verifyToken], getGames);
router.get(base + '/:idPlayer', [verifyToken] ,getGamesByPlayer);
router.post(base, [verifyToken], createGame);
router.put(base + '/:idPlayer', [verifyToken], updateGame);
router.delete(base + '/:idPlayer/:index', [verifyToken], deleteGame);

module.exports = router;