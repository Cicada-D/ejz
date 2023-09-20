const db = require("../model/index")
const Addressmodel = db.addressmodel

exports.create = (req, res) => {
  const AddressMessage = {
    username: req.body.username,
    name: req.body.name,
    tel: req.body.tel,
    address: req.body.address,
    //tag 0非默认 TAG 1 默认地址
    tag: req.body.tag,
  }
  Addressmodel.update(
    {
      tag: "0",
    },
    {
      where: {
        username: req.body.username,
      },
    }
  ).then(
    Addressmodel.create(AddressMessage)
      .then((data) => {
        res.send(Array(data))
        console.log(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: "创建信息出错",
        })
      })
  )
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