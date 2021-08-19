//Load the modules
const Sequelize = require("sequelize");


//Database connection
const connection = new Sequelize('guidepress', 'root','162001',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});


//Connection to exported
module.exports = connection;