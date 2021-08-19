//Load the modules
const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");

//Load connection with database
const Article = require("./Article");


//Article administrative routes
router.get("/admin/articles", adminAuth, (req,res) => {
    Article.findAll({
        include: [{model: Category}] //JOIN
    }).then(articles => {
        res.render("admin/articles/index", {articles: articles});
    });
});
router.get("/admin/articles/new", adminAuth, (req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories});
    });
});
router.get("/admin/articles/edit/:id", adminAuth, (req,res) => {
    var  id= req.params.id;
    Article.findByPk(id).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("admin/articles/edit",{categories:categories, article: article});
            });
        }else{
            res.redirect("/")
        }
    }).catch(err => {
       res.redirect("/") 
    });
});


//Article user routes
router.get("/articles/page/:num", (req,res) => {
    var page = req.params.num;

    if(isNaN(page) || page == 1 || page == 0){
       var offset = 0; //1= 0 a 2
    }else {offset = (parseInt(page) -1) * 3} //2 =  3 a 5 (2-1 *3)    //3 = 6 a 8 (2)  //4 = 9 a 11

    Article.findAndCountAll({
        order:[
            ['id','DESC']
        ],
        limit: 3,
        offset: offset
    }).then(articles => {
        var next;
        if(offset + 3 >= articles.count){
            next = false;
        }else{next = true}
        var result = {page: parseInt(page), next: next, articles: articles}

        Category.findAll().then(categories => {
            res.render("admin/articles/page",{result: result, categories: categories})
        });
    });
});


//POST/CRUD routes articles
router.post("/articles/save",(req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() =>{
        res.redirect("/admin/articles");
    });
});
router.post("/articles/delete",(req,res) =>{
    var  id= req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            })
        }
        else{
            res.redirect("/admin/articles");
        }
    }
    else{
        res.redirect("/admin/articles");
    }
});
router.post("/articles/update", (req, res) => {
    var id= req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.update({title:title, body:body, categoryId:category, slug:slugify(title)}, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    }).catch(err => {console.log("Erro: " + err)}) 
});
//Controller to exported
module.exports = router;