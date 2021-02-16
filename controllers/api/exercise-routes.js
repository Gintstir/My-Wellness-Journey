const router = require('express').Router();
const Exercise = require('../../models/Exercise');
const { post } = require('../home-routes');

router.get('/', (req, res) => {
    Exercise.findAll({
        attributes: [
            'exercise_title',
            'exercise_body'
        ]
    })
    .then(dbExerciseData => {res.json(dbExerciseData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Exercise.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbExerciseData => {
        if(!dbExerciseData) {
            res.status(404).json({message: 'No exercise found with this ID'});
            return;
        }
        res.json(dbExerciseData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Exercise.update({
        exercise_title: req.body.exercise_title,
        exercise_body: req.body.exercise_body
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbExerciseData => {
        if(!dbExerciseData) {
            res.status(404).json({ message: 'No exercise found with this ID' });
            return;
        }
        res.json(dbExerciseData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });    
});

router.delete('/:id', (req, res) => {
    Exercise.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbExerciseData => {
        if(!dbExerciseData) {
            res.status(404).json({ message: 'No exercise found with that ID' })
            return;
        }
        res.json(dbExerciseData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})



module.exports = router;