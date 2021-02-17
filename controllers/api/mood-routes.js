const router = require('express').Router();
const Mood = require('../../models/Mood');
const { User } = require('../../models/Mood');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session.user_id)
    Mood.findAll({
        where: {
            user_id: req.session.user_id
        }
    }).then(dbMoodData => {
    if(!dbMoodData) {
        res.status(404).json({message: 'No user found with this ID' })
        return;
    }
    console.log(dbMoodData)
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
        user_id: req.session.user_id
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