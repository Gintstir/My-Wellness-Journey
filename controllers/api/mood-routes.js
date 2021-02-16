const router = require('express').Router();
const Mood = require('../../models/Mood');
const { User } = require('../../models/Mood');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Mood.findAll({
        attributes: [
            'title',
            'mood_date',
            'mood_rating'
        ]
    })
    .then(dbMoodData => {res.json(dbMoodData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/', withAuth, (req, res) => {
    //Add in session check
    Mood.findAll({
        where: {
            id: req.params.id
        }
    }).then(dbMoodData => {
    if(!dbMoodData) {
        res.status(404).json({message: 'No user found with this ID' })
        return;
    }
    res.json(dbMoodData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }) 
})

router.post('/', withAuth, (req, res) => {
    Mood.create({
        title: req.body.title,
        mood_date: req.body.mood_date,
        mood_rating: req.body.mood_rating,
        user_id: req.body.user_id
    })
    .then(dbMoodData => res.json(dbMoodData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.delete('/:id', withAuth, (req, res) => {
    Mood.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbMoodData => {
        if(!dbMoodData) {
            res.status(404).json({message: 'Mood entry not found'})
            return;
        }
        res.json(dbMoodData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;