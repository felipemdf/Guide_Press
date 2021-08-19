//Load the modules
const express = require("express");
const app = express();
const session = require('express-session');


//Load export file
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const UsersController = require("./users/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./users/User");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Connection made with successfully");
    })
    .catch((error) => {
        console.log(error);
    })

    
//Load the view engine
app.set('view engine','ejs');


//Load Session
app.use(session({
    secret:"MeuPauNaSuaMão",
    cookie: {
        maxAge: 3600000 //expira em 1 min
    }
}));

//Load the middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));


//Controllers
app.use("/",categoriesController);
app.use("/",articlesController);
app.use("/",UsersController);



//Routes of user
app.get("/", (req,res) => {
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit: 3
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index",{articles:articles, categories:categories}); 
        });
    });
});
app.get("/:slug",(req,res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug,
        }
    }).then(article => {
        if(article != undefined) {
            Category.findAll().then(categories => {
                res.render("article",{article: article,categories:categories}); 
            });
        }
        else {res.redirect("/")}
    }).catch(err => res.redirect("/"))
});
app.get("/category/:slug",(req,res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug,
        },include: [{model: Article}]
    }).then(category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render("index",{articles: category.articles, categories:categories});
            });
        }
        else{
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
});



//Start the server
app.listen(8080,() => {
    console.log("Server rodando");
});
