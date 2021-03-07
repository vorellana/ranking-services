const { Router } = require('express');
const { verifyToken } = require('../middlewares/authJwt');
const router = Router();

const{ 
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer
} = require('../services/players.service')

const base = '/api/players';

router.get(base, [verifyToken], getPlayers);
router.get(base + '/:id', [verifyToken], getPlayerById);
router.post(base, [verifyToken], createPlayer);
router.put(base + '/:id', [verifyToken], updatePlayer);
router.delete(base + '/:id', [verifyToken], deletePlayer);

module.exports = router;