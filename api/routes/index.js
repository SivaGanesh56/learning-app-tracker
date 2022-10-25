const express = require('express');
const router = express.Router();

// controllers
const { ArticleController } = require('../controller/article.controller');


// repos
const { ArticleRepo } = require('../db/repository/articlerepo');

const articleController =  new ArticleController(new ArticleRepo());

router.post('/createArticle', articleController.createArticle);


module.exports = { router };