const { Router } = require('express');
const router = Router();

const{ 
    signin
} = require('../services/auth.service')

const base = '/api/auth';

// login
router.post(base + '/signin', signin);

module.exports = router;