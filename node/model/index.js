const dbConfig = require("../config/db.config")
const Sequelize = require("sequelize")
const moment = require('moment')
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.Host,
    port: dbConfig.Port,
    dialect: dbConfig.dialect
  }

)


const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.servicemodel = require("./service")(sequelize, Sequelize)
db.usermodel = require('./user')(sequelize, Sequelize)
db.bidmodel = require("./bid")(sequelize, Sequelize)
db.addressmodel = require("./address")(sequelize, Sequelize)
module.exports = db 