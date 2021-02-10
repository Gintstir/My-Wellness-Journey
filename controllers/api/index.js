const router = require('express').Router();

//import routes:
//const route = require('./path);
const userRoutes = require('./user-routes');


//use routes:
//router.use('/path', route);
router.use('/users', userRoutes);



module.exports = router;

