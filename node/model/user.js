
module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define("usermodel", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    token: {
      type: Sequelize.STRING
    }
  })
  return Login
}