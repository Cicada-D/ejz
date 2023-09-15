const address = require("../controller/addresscontroller.js")

var router = require("express").Router()

//增加地址
router.post("/add", address.create)
//查询用户添加的地址
router.get("/getAdress", address.findAll)

module.exports = router