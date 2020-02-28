const axios = require('axios')

module.exports = axios.create({
  baseURL: 'http://localhost:3000/apis/',
  timeout: 1000,
});