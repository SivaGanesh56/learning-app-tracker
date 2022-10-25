const { Article } = require('../models/Article');

class ArticleRepo {
    article;
    constructor(){
        this.article = Article;
    }

    async createArticle({ user, title, description, link }){
       const article = await this.article.create({
            user : user,
            title : title,
            description : description,
            link : link
        });
        return article;
     
    }
    
    // getArticles(){

    // }
    

}

module.exports = { ArticleRepo };