const Sequelize = require('sequelize');
const { sequelize } = require('../index');

const Main = sequelize.define('Main', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    articleId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true
});


module.exports = { Main };