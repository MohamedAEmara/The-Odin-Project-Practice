const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wikiiii home page');
});


router.get('/ab*ou?t+', (req, res) => {
    res.send('Aboutttt this wiki');
});


module.exports = router;