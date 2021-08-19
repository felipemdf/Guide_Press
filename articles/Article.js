//Load the modules
const Sequelize = require("sequelize");

//Load export file
const connection = require("../database/database");
const Category = require("../categories/Category");

//Create model
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});


//Relationship
Article.belongsTo(Category); //1 articles for 1 category (1-1)
Category.hasMany(Article); //N categories for 1 article (1-N)


//Update
// # Article.sync({force:true});


//Model to exported
module.exports = Article;