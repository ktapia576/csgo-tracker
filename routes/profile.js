const express = require('express');
const router = express.Router();

router.get('/:profileIdentifier', (req, res) => {
    console.log(`Profile Identifier: ${req.params.profileIdentifier}`)
    res.send('Hello')
});

module.exports = router