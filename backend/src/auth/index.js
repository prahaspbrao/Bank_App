const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.route("/login")
.get(AuthController.loginUser)

router.route("/register")
.get(AuthController.registerUser)

module.exports = router