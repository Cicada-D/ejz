
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true })) // parse alllication/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json




const db = require('./model/index')
db.sequelize.sync()




app.use("/service", require("./router/service"))
app.use("/login", require("./router/user"))
app.use("/address", require("./router/address"))
app.use("/bid", require("./router/bid"))

app.listen(3300, () => {
  console.log('端口3300')
})