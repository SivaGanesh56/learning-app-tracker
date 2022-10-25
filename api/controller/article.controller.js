class ArticleController {
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }

    async createArticle(req, res) {
        try {
            const { user, title, description, link } = req.payload;
            await this.articleRepo.createArticle({
                user, title, description, link
            });
        } catch (error) {
            console.log('Error occured while creating article', error);
            res.status(500).send('Internal Server Error Occured!');
        }
    }


    updateArticleStatus(req, res) {
        try {
            const { user, articleId, status } = req.payload;

        } catch (error) {
            console.log('Error occured while getting task', error);
            res.status(500).send('Internal Server Error Occured!');
        }
    }
}

module.exports = { ArticleController };