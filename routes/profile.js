const express = require('express');
const router = express.Router();
const axios = require('axios');

const config = {
    headers: {
        'TRN-Api-Key': process.env.TRACKER_API_KEY
    }
}

router.get('/:profileIdentifier', async (req, res) => {
    try {
        const { profileIdentifier } = req.params;

        const response = await axios.get(`${process.env.TRACK_API_URL}/profile/steam/${profileIdentifier}`, config);

        res.send(response.data);
    } catch (err) {
        // err.response.data for message from API
        res.status(404).json({
            message: 'Profile not found!'
        });
    }
});

module.exports = router