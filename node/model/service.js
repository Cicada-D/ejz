module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("service", {
    src: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING
    }
  })
  return Service
}