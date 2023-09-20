
var moment = require('moment')

module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("service", {
    src: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    //1就是1 2就是2
    type: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      type: Sequelize.DATE,
      get () {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    updatedAt: {
      type: Sequelize.DATE,
      get () {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  })
  return Service
}