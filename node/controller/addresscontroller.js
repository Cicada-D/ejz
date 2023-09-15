const db = require("../model/index")
const Addressmodel = db.addressmodel

exports.create = (req, res) => {
  const AddressMessage = {
    username: req.body.username,
    name: req.body.name,
    tel: req.body.tel,
    address: req.body.address
  }
  Addressmodel.create(AddressMessage)
    .then(data => {
      res.send(Array(data))
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "创建信息出错"
      })
    })
}

exports.findAll = (req, res) => {
  Addressmodel.findAll({
    where: {
      username: req.query.username
    }
  }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}
