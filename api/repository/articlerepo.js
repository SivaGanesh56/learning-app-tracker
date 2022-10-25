import {Article} from "../db/models/Article"

class ArticleRepo {

    article = new  Article();
    createArticle({ user, title, description, link }){
        this.article.insert({
            
        })
     
    }
    

}