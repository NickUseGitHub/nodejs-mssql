const express = require('express');
const { Sequelize, QueryTypes } = require('sequelize');

const port = 3000;
const app = express();

const database = 'nodedb';
const username = 'sa';
const password = 'Pass_12345';
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mssql'
});

app.get('/', async function (_, res) {
  const todoList = await sequelize.query("SELECT * FROM Todo", { type: QueryTypes.SELECT });

  res.json(todoList);
});

const server = app.listen(3000, function () {
    console.log(`Server is running ... on port: ${port}`);
});