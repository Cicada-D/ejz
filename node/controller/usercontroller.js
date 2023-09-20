const db = require("../model/index")
const Usermodel = db.usermodel

exports.create = async (req, res) => {
  const bundleUserName = await Usermodel.findAll({ where: { username: req.body.username } })
  // 判断用户名是否存在
  if (bundleUserName.length > 0) {
    if (req.body.username == bundleUserName[0].dataValues.username) {
      if (req.body.password !== bundleUserName[0].dataValues.password) {
        res.send(
          { message: '用户已经存在,且密码错误' })
      }
      else {
        res.send(bundleUserName[0].dataValues)
      }
    }
  }
  else {
    const userMessage = {
      username: req.body.username,
      password: req.body.password,
      token: req.body.token,
    }
    Usermodel.create(userMessage)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "创建信息出错"
        })
      })
  }
}