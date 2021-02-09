const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Water extends Model {}

Water.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        water_amount: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            validate: {
                len: [0, 200]
            }
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
    modelName: "water",
    }
);

module.exports = Water;