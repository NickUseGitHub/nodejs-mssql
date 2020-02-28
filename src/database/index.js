const Sequelize = require('sequelize')

const database = 'nodedb'
const username = 'sa'
const password = 'Pass_12345'
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mssql'
})

module.exports = sequelize
