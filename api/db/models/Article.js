const Sequelize = require('sequelize');
const { sequelize } = require('../index');
const { Main } = require('./Main');

const Article = sequelize.define('Article', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    },
    status1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    status2: {
        type:  Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true
});

Article.belongsTo(Main);

module.exports = { Article };