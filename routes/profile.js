const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:profileIdentifier', async (req, res) => {
    try {
        const config = {
            headers: {
                'TRN-Api-Key': process.env.TRACKER_API_KEY
            }
        }

        const { profileIdentifier } = req.params;

        const response = await axios.get(`${process.env.TRACK_API_URL}/profile/steam/${profileIdentifier}`, config);

        res.send(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router