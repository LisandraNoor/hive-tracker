const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)


// helper function, so that we can eaily add more models down the road without having to
// add foreach and sequelize and so on individually
fs
  // read through current directory and give us an array of files
  .readdirSync(__dirname)
  // filter out files that is equivelant to index.js (we want everything but the index)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    // grab the files
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db