const user = require("../controller/usercontroller.js")

var router = require("express").Router()


//登录注册判断
router.post('/', user.create)

module.exports = router