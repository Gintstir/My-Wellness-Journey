const User = require('../models/User');
const Mood = require('../models/Mood');
const Water = require('../models/Water');
const sequelize = require('../config/connection');

//seeds for dummy data will go here create as many files as there are tables,
// that way we can drop database as necesary and rebuild to test without needing to input data manually everytime.

//use command: `node seeds/<file name>`   --to reseed

const userdata = [
    {
        id: 1,
        username: 'testuser',
        email: 'testuser@gmail.com',
        password: 'password12345'
    },
    {
        id: 2,
        username: 'newuser',
        email: 'newuser@gmail.com',
        password: 'password6789'
    },
    {
        id: 3,
        username: 'thirduser',
        email: 'thirduser@gmail.com',
        password: 'thirdpassword'
    },
    {
        id: 4,
        username: 'fourthuser',
        email: 'fourthuser@gmail.com',
        password: 'fourthpassword'
    },
    {
        id: 5,
        username: 'fifthuser',
        email: 'fifthuser@gmail.com',
        password: 'fifthpassword'
    },
    {
        id: 6,
        username: 'sixthuser',
        email: 'sixthuser@gmail.com',
        password: 'sixthpassword'
    },
    {
        id: 7,
        username: 'seventhuser',
        email: 'seventhuser@gmail.com',
        password: 'seventhpassword'
    },
    {
        id: 8,
        username: 'eighthuser',
        email: 'eigthuser@gmail.com',
        password: 'eighthpassword'
    },
    {
        id: 9,
        username: 'ninthuser',
        email: 'ninthuser@gmail.com',
        password: 'ninthpassword'
    }

]

const mooddata = [
    // user 1-----------------------------------------------------------------------
    {
        id: 1,
        title: 'stressed',
        mood_date: "2021-02-03",
        mood_rating: 3,
        user_id: 1
    },
    {
        id: 2,
        title: 'content',
        mood_date: "2021-02-04",
        mood_rating: 6,
        user_id: 1
    },
    {
        id: 3,
        title: 'tired',
        mood_date: "2021-02-05",
        mood_rating: 5,
        user_id: 1
    },
    {
        id: 4,
        title: 'moody',
        mood_date: "2021-02-01",
        mood_rating: 3,
        user_id: 1
    },
    {
        id: 5,
        title: 'excited',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 1
    },
    {
        id: 6,
        title: 'hungry',
        mood_date: "2021-01-26",
        mood_rating: 6,
        user_id: 1
    },
    {
        id: 7,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 1
    },
    //user 2-----------------------------------------------------------------------
    {
        id: 1,
        title: 'silly',
        mood_date: "2021-02-03",
        mood_rating: 9,
        user_id: 2
    },
    {
        id: 2,
        title: 'rested',
        mood_date: "2021-02-04",
        mood_rating: 6,
        user_id: 2
    },
    {
        id: 3,
        title: 'anxious',
        mood_date: "2021-02-05",
        mood_rating: 5,
        user_id: 2
    },
    {
        id: 4,
        title: 'bored',
        mood_date: "2021-02-01",
        mood_rating: 3,
        user_id: 2
    },
    {
        id: 5,
        title: 'hungry',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 2
    },
    {
        id: 6,
        title: 'excited',
        mood_date: "2021-01-29",
        mood_rating: 6,
        user_id: 2
    },
    {
        id: 7,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 2
    },
    //user 3-----------------------------------------------------------------------
    {
        id: 1,
        title: 'content',
        mood_date: "2021-02-03",
        mood_rating: 9,
        user_id: 3
    },
    {
        id: 2,
        title: 'rested',
        mood_date: "2021-02-04",
        mood_rating: 6,
        user_id: 3
    },
    {
        id: 3,
        title: 'hungry',
        mood_date: "2021-02-05",
        mood_rating: 5,
        user_id: 3
    },
    {
        id: 4,
        title: 'bored',
        mood_date: "2021-02-01",
        mood_rating: 3,
        user_id: 3
    },
    {
        id: 5,
        title: 'hungry',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 3
    },
    {
        id: 6,
        title: 'excited',
        mood_date: "2021-01-29",
        mood_rating: 6,
        user_id: 3
    },
    {
        id: 7,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 3
    },
    //user 4-----------------------------------------------------------------------
    {
        id: 1,
        title: 'silly',
        mood_date: "2021-02-03",
        mood_rating: 9,
        user_id: 4
    },
    {
        id: 2,
        title: 'rested',
        mood_date: "2021-02-04",
        mood_rating: 7,
        user_id: 4
    },
    {
        id: 3,
        title: 'rested',
        mood_date: "2021-02-05",
        mood_rating: 9,
        user_id: 4
    },
    {
        id: 4,
        title: 'bored',
        mood_date: "2021-02-01",
        mood_rating: 5,
        user_id: 4
    },
    {
        id: 5,
        title: 'bored',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 4
    },
    {
        id: 6,
        title: 'excited',
        mood_date: "2021-01-29",
        mood_rating: 6,
        user_id: 4
    },
    {
        id: 7,
        title: 'silly',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 4
    },
    //user 5-----------------------------------------------------------------------
    {
        id: 1,
        title: 'rested',
        mood_date: "2021-02-03",
        mood_rating: 9,
        user_id: 5
    },
    {
        id: 2,
        title: 'rested',
        mood_date: "2021-02-04",
        mood_rating: 6,
        user_id: 5
    },
    {
        id: 3,
        title: 'content',
        mood_date: "2021-02-05",
        mood_rating: 10,
        user_id: 5
    },
    {
        id: 4,
        title: 'silly',
        mood_date: "2021-02-01",
        mood_rating: 7,
        user_id: 5
    },
    {
        id: 5,
        title: 'hungry',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 5
    },
    {
        id: 6,
        title: 'excited',
        mood_date: "2021-01-29",
        mood_rating: 6,
        user_id: 5
    },
    {
        id: 7,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 5
    },
    //user 6-------------------------------------------------------------------
    {
        id: 1,
        title: 'stressed',
        mood_date: "2021-02-03",
        mood_rating: 2,
        user_id: 6
    },
    {
        id: 2,
        title: 'anxious',
        mood_date: "2021-02-04",
        mood_rating: 4,
        user_id: 6
    },
    {
        id: 3,
        title: 'anxious',
        mood_date: "2021-02-05",
        mood_rating: 3,
        user_id: 6
    },
    {
        id: 4,
        title: 'bored',
        mood_date: "2021-02-01",
        mood_rating: 5,
        user_id: 6
    },
    {
        id: 5,
        title: 'hungry',
        mood_date: "2021-01-30",
        mood_rating: 5,
        user_id: 6
    },
    {
        id: 6,
        title: 'moody',
        mood_date: "2021-01-29",
        mood_rating: 3,
        user_id: 6
    },
    {
        id: 7,
        title: 'tired',
        mood_date: "2021-01-29",
        mood_rating: 6,
        user_id: 6
    },
    //user 7--------------------------------------------------------------------
    {
        id: 1,
        title: 'moody',
        mood_date: "2021-02-03",
        mood_rating: 5,
        user_id: 7
    },
    {
        id: 2,
        title: 'moody',
        mood_date: "2021-02-04",
        mood_rating: 5,
        user_id: 7
    },
    {
        id: 3,
        title: 'moody',
        mood_date: "2021-02-05",
        mood_rating: 6,
        user_id: 7
    },
    {
        id: 4,
        title: 'rested',
        mood_date: "2021-02-01",
        mood_rating: 7,
        user_id: 7
    },
    {
        id: 5,
        title: 'hungry',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 7
    },
    {
        id: 6,
        title: 'moody',
        mood_date: "2021-01-29",
        mood_rating: 5,
        user_id: 7
    },
    {
        id: 7,
        title: 'moody',
        mood_date: "2021-01-29",
        mood_rating: 7,
        user_id: 7
    },
    //user 8-----------------------------------------------------------------
    {
        id: 1,
        title: 'tired',
        mood_date: "2021-02-03",
        mood_rating: 4,
        user_id: 8
    },
    {
        id: 2,
        title: 'rested',
        mood_date: "2021-02-04",
        mood_rating: 8,
        user_id: 8
    },
    {
        id: 3,
        title: 'tired',
        mood_date: "2021-02-05",
        mood_rating: 4,
        user_id: 8
    },
    {
        id: 4,
        title: 'rested',
        mood_date: "2021-02-01",
        mood_rating: 8,
        user_id: 8
    },
    {
        id: 5,
        title: 'tired',
        mood_date: "2021-01-30",
        mood_rating: 4,
        user_id: 8
    },
    {
        id: 6,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 8,
        user_id: 8
    },
    {
        id: 7,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 8
    },
    //user 9---------------------------------------------------
    {
        id: 1,
        title: 'silly',
        mood_date: "2021-02-03",
        mood_rating: 7,
        user_id: 9
    },
    {
        id: 2,
        title: 'rested',
        mood_date: "2021-02-04",
        mood_rating: 8,
        user_id: 9
    },
    {
        id: 3,
        title: 'content',
        mood_date: "2021-02-05",
        mood_rating: 9,
        user_id: 9
    },
    {
        id: 4,
        title: 'excited',
        mood_date: "2021-02-01",
        mood_rating: 10,
        user_id: 9
    },
    {
        id: 5,
        title: 'hungry',
        mood_date: "2021-01-30",
        mood_rating: 8,
        user_id: 9
    },
    {
        id: 6,
        title: 'excited',
        mood_date: "2021-01-29",
        mood_rating: 6,
        user_id: 9
    },
    {
        id: 7,
        title: 'rested',
        mood_date: "2021-01-29",
        mood_rating: 9,
        user_id: 9
    },
];

sequelize
    .sync({ force: true })
    .then(() => {
        return User.bulkCreate(userdata);                
    })
    .then(()=> {
        return Mood.bulkCreate(mooddata)
    })
    .then(dbUserData => {
        console.log('=>  Users Seeded <=');
    })
    .then(dbMoodData => {
        console.log('=> Moods Seeded <=');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
