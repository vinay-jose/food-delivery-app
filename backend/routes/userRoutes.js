const express = require("express")

var router = express.Router()

const { userRegister, userLogin } = require("../controllers/userController") 

router.post("/login", userLogin)

router.post("/signup", userRegister)

module.exports = router