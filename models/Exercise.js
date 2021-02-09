const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        exercise_bool: {
            type: DataTypes.BOOLEAN,
            allowNull: true
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    }
);

module.exports = Exercise;