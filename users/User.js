//Load the modules
const Sequelize = require("sequelize");
const connection = require("../database/database");


//Create model
const User = connection.define('Users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


//Update
// # User.sync({force:true});


//Model to exported
module.exports = User;