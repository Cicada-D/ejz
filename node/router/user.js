const user = require("../controller/usercontroller.js")

var router = require("express").Router()


//登录注册判断
router.post('/', user.create)


router.get('/get_token',user.get_token)


router.post('/add_token',user.token_add)
module.exports = router