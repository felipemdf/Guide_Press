//Load the modules
const Sequelize = require("sequelize");


//Load export file
const connection = require("../database/database");


//Create model
const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


//Update
// # Category.sync({force:true});


//Model to exported
module.exports = Category;