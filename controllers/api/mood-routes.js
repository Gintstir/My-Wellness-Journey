const router = require('express').Router();
const Mood = require('../../models/Mood');

//get all moods 3001/api/moods
router.get('/', (req, res) => {
    Mood.findAll({

    }).then(dbMoodData => {res.json(dbMoodData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Mood.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbMoodData => {
        if (!dbMoodData) {
            res.status(400).json({ message: "No mood found with that id" })
            return;
        }
        res.json(dbMoodData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    //expect: "title": "mood", "mood_date": "02/14/2021", "mood_rating": 0-10
    Mood.create({
        title: req.body.title,
        mood_date: req.body.mood_date,
        mood_rating: req.body.mood_rating
    })
    .then(dbMoodData => res.json(dbMoodData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;