const router = require('express').Router();

const games = require('../games/gamesModel.js');
    

router.get('/', async (req, res) => {
    console.log('games')
    try {
        const gaming = await games.getAll();
        res.status(200).json(gaming);
    } catch (err) {
        res.status(500).json({ error: 'You\'re not old enough to play this game' })
    }
});

router.post('/', async (req, res) => {
    try {
        const game = await games.insert(req.body);
        res.status(201).json(game)
    } catch (err) {
        res.status(422).json({ error: 'Incomplete game data...you are not a gamer!' })
    }
});

router.delete('/:id', async (req, res)  => {
    const {id} = req.params;
    try {
        const deleted = await games.remove(id).then(deleted => {
            res.status(200).json(deleted)
        });
        {
            res.status(404).end({ message: 'Player eliminated'})
        } res.json(deleted);
    } catch (err) {
        res.status(500).json({
            message: 'You have lost this round',
        });
    }
});

module.exports = router;