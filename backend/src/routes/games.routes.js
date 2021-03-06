const { Router } = require('express');
const router = Router();


const{ 
    getGames,
    getGamesByPlayer,
    createGame,
    updateGame,
    deleteGame
} = require('../services/games.service')

const base = '/api/games';

router.get(base, getGames);
router.get(base + '/:idPlayer', getGamesByPlayer);
router.post(base, createGame);
router.put(base + '/:idPlayer', updateGame);
router.delete(base + '/:idPlayer/:index', deleteGame);

module.exports = router;