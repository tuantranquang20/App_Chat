var express = require("express");
const User = require("@models/User");
const response = require("@commons/response");
const userController = require("@controllers/userController");
const { debug } = require("../utils/constant");
var router = express.Router();

router.post("/login", async function (req, res, next) {
  try {
    const users = await userController.login(req, res, next);
    res.json(response.success(users, "Đăng nhập thành công"));
  } catch (error) {
    res.json(response.error(error.code, error.msg));
  }
});

router.get("/list", async (req, res, next) => {
  try {
    const users = await userController.list(req, res, next);
    res.json(response.success(users));
  } catch (error) {
    res.json(response.error(error.code, error.msg));
  }
});

module.exports = router;
