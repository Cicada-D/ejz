const bid = require("../controller/bidcontroller.js")

var router = require("express").Router()

//增加订单
router.post("/add", bid.create)

//查询所有订单
router.get("/getAll", bid.findAll)
//查询待确认订单
router.get("/get_ok", bid.find_ok)
//查询待服务订单
router.get("/get_wait", bid.find_wait)
//查询取消订单
router.get("/get_cancell", bid.find_cancell)
//付款修改订单
router.post("/change_bid", bid.change_bid)
//取消订单
router.post("/cancell_bid", bid.cancell_bid)









module.exports = router