const { Router } = require('express');
const router = Router();

const{ 
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer
} = require('../services/players.service')

const base = '/api/players';

router.get(base, getPlayers);
router.get(base + '/:id', getPlayerById);
router.post(base, createPlayer);
router.put(base + '/:id', updatePlayer);
router.delete(base + '/:id', deletePlayer);

module.exports = router;