const express = require('express');
const { sequelize } = require('./db');
const { router } = require('./routes');

async function init() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const app = express();

app.use('/', router)

app.listen(8080, () => {
    console.log("Server Ready on 8080");
    init();
});
