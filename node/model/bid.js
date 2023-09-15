
var moment = require('moment')

module.exports = (sequelize, Sequelize) => {
  const Bid = sequelize.define("bid", {
    //用户名即手机号
    username: {
      type: Sequelize.STRING,
    },
    service: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE,
      get () {
        return moment(this.getDataValue('date')).format('YYYY-MM-DD')
      }
    },
    comment: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTEGER
    },
    num: {
      type: Sequelize.STRING
    },
    money: {
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
  return Bid
}