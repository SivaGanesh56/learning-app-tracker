const { Sequelize } = require('sequelize');

// postgres://postgres:postgres@localhost:5432/learning-app

const sequelize = new Sequelize('learning-app', 'postgres', 'postgres', {
  host: 'localhost',
  dialect:  'postgres'
});


module.exports = { sequelize };