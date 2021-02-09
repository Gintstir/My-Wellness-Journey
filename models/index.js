// import all models
const Post = require('./Post');
const User = require('./User');
const Exercise = require('./Exercise');
const Mood = require('./Mood');
const Water = require('./Water');


// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Mood, {
    foreignKey: 'user_id'
})

User.hasMany(Water, {
    foreignKey: 'user_id'
});

User.hasMany(Exercise, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Mood.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Exercise.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Water.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

//export
module.exports = { Post, User, Exercise, Mood, Water };
