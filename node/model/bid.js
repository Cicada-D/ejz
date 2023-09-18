
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
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING
    },
    tel:{
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTEGER
    },
    money: {
      type: Sequelize.INTEGER
    },
    num: {
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