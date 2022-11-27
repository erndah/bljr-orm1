const {Sequelize} = require("sequelize")

const db = new  Sequelize('sequelizer_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;