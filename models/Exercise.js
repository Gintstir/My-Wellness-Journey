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
        exercise_title: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [3]
            }
        },
        exercise_body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [5]
            }
        },        
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "exercise",
    }
);

module.exports = Exercise;