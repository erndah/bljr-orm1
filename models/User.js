const {Sequelize} = require("sequelize")
const db = require("../config/database.js")

// init Datatypes
const {DataTypes} = Sequelize;

//define schema
const User = db.define('user', {
    nama: {
        type: DataTypes.STRING
    },
    hobi: {
        type: DataTypes.STRING
    }
},{
    // Freeze Table name
    freezeTableName: true,
    timestamps: true
});

module.exports = User;