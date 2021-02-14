const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    console.log(req.session);
    if(req.session.loggedIn) {
        res.render('homepage', {
            loggedIn: req.session.loggedIn
        })
    } else {
        res.render('landing', {
            loggedIn: req.session.loggedIn
        });
    }
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/home', withAuth, (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
})

router.get('/moodtracker', withAuth, (req, res) => {
    res.render('moodtracker', {
        loggedIn: req.session.loggedIn
    });
})

module.exports = router;