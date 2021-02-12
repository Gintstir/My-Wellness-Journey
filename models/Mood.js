const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create mood model
class Mood extends Model {}

Mood.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1, 25]
            }
        },
        mood_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mood_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },        
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood'
    }
);

module.exports = Mood;