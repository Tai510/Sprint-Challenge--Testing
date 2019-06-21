const router = require('express').Router();

const games = require('../games/gamesModel.js');
    

router.get('/games', async (req, res) => {
    console.log('games')
    try {
        const gaming = await games.getAll();
        res.status(200).json(gaming);
    } catch (err) {
        res.status(500).json({ error: 'You\'re not old enough to play this game' })
    }
});



module.exports = router;