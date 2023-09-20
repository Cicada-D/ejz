const db = require("../model/index")
const Bidmodel = db.bidmodel

var moment = require('moment')
//添加订单
exports.create = (req, res) => {
  console.log(req.body)
  const BidMessage = {
    username: req.body.username,
    service: req.body.service,
    address: req.body.address,
    date: req.body.date,
    comment: req.body.comment,
    tel: req.body.tel,
    money: req.body.money,
    state: 1,
    reply: '',
    num: "DH" + moment().format('YYYYMMDhhmmss') + "elpsycongroo",
  }
  Bidmodel.create(BidMessage)
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

//查询所有订单
//state 1 是未付款待确认 2是待服务 3 是取消
exports.findAll = (req, res) => {
  Bidmodel.findAll({
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

//查询待确认订单
exports.find_ok = (req, res) => {
  Bidmodel.findAll({
    where: {
      username: req.query.username,
      state: 1,
    }
  }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}
//查询待服务订单
exports.find_wait = (req, res) => {
  Bidmodel.findAll({
    where: {
      username: req.query.username,
      state: 2,
    }
  }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}
//查询取消订单
exports.find_cancell = (req, res) => {
  Bidmodel.findAll({
    where: {
      username: req.query.username,
      state: 3,
    }
  }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}




//付款修改订单
exports.change_bid = (req, res) => {
  Bidmodel.update({
    state: 2
  },
    {
      where: {
        num: req.body.num
      }
    }).then((data) => {
      res.send("修改成功")
    }).catch(err => {
      res.status(500).send({
        message: "修改失败"
      })
    })
}
//取消订单
exports.cancell_bid = (req, res) => {
  Bidmodel.update({
    state: 3
  },
    {
      where: {
        num: req.body.num
      }
    }).then((data) => {
      res.send({
        message: "订单取消成功"
      })
    }).catch(err => {
      res.status(500).send({
        message: "订单取消失败"
      })
    })
}