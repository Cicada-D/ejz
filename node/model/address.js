
var moment = require('moment')

module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    username: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    tel: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    tag: {
      type: Sequelize.STRING
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
  return Address
}
