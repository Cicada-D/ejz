const service = require("../controller/servicecontroller.js")

var router = require("express").Router()

//增加服务
router.post("/add", service.create)
router.get("/getItem", service.findAll)
module.exports = router