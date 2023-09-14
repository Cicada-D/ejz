const dbConfig = require("../config/db.config")
const Sequelize = require("sequelize")

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



module.exports = db 