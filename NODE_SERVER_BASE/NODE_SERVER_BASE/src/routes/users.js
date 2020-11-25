const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
// const userModels = require('./../models/userModels')
const authController = require("./../controllers/authControllers");

router.post("/login", authController.login);

router.post("/",userControllers.createUser);
//tạo middle ware check role
// router.use(authController.protected, authController.checkRole);
router
  .route("/")
  .get(authController.protected, userControllers.getAllUsers)
module.exports = router;
