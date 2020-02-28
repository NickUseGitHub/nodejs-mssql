const { QueryTypes } = require('sequelize');
const sequelize = require('../../database')

const TodoController = () => {
  const get = async (_, res) => {
    const todoList = await sequelize.query("SELECT * FROM Todo", { type: QueryTypes.SELECT })

  res.json(todoList)
  }
 
  return {
    get,
  }
}
 
module.exports = TodoController