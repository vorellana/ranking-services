const { Router } = require('express');
const router = Router();

const{ 
    signin
} = require('../services/auth.service')

const base = '/api/auth';

router.get('/api/test', (req, res) => {
    res.json({ message: "backend up!"});
});


// login
router.post(base + '/signin', signin);

module.exports = router;