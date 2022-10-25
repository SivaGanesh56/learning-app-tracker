class MainController {
    constructor() {

    }

    getArticles(req, res) {
        try {
            const { date, user } = req.payload;

        } catch (error) {
            console.log('Error occured while getting articles', error);
            res.status(500).send('Internal Server Error Occured!');
        }
    }


}