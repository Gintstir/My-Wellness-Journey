const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/moodtracker', (req, res) => {
    if(req.session.loggedIn) {
        res.render('moodtracker', {
            loggedIn: req.session.loggedIn
        });
    }
})

module.exports = router;