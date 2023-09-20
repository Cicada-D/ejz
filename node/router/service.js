const service = require("../controller/servicecontroller.js")

var router = require("express").Router()

//增加服务
router.post("/add", service.create)


//查询所有
router.get("/getItem", service.findAll)

//查询家政服务
router.get("/get_first_Item", service.find_first)
//查询家电清洗
router.get("/get_second_Item", service.find_second)

module.exports = router