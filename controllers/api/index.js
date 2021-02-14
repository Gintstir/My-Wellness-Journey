const router = require('express').Router();

//import routes:
//const route = require('./path);
const userRoutes = require('./user-routes');
const moodRoutes = require('./mood-routes');
const exerciseRoutes = require('./exercise-routes');


//use routes:
//router.use('/path', route);
router.use('/users', userRoutes);
router.use('/moods', moodRoutes);
router.use('/exercises', exerciseRoutes);


module.exports = router;

