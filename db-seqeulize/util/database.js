const Sequlize = require('sequelize')
const sequlize = new Sequlize('node-complete', 'root', '', { dialect: 'mysql', host: 'localhost' })

module.exports = sequlize