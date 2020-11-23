"use strict";
const { debug, apiCode, IS_ACTIVE, ROLE, SALE_STATUS } = require("./constant");
var compose = require("composable-middleware");
const response = require("../common/response");
const Sequelize = require("sequelize");
const sequelize = require("../config/env");
const { user, user_sale_media, user_sale_info, province } = require("@models");
const Op = Sequelize.Op;
// const userController = require('../controllers/userController')

module.exports = {
  isGuest: function isGuest() {
    return compose().use(function (req, res, next) {
      next();
      return;
    });
  },
  isAuthenticated: function isAuthenticated() {
    return compose().use(async function (req, res, next) {
      if (req.headers && req.headers.token) {
        try {
          var findUser = await user.findOne({
            attributes: ["id"],
            where: {
              token: req.headers.token,
            },
          });
          if (findUser) {
            req.auth = findUser;
            next();
            return;
          } else return res.json(response.error(apiCode.UNAUTHORIZED));
        } catch (error) {
          debug.error(error);
          return res.json(response.error(apiCode.DB_ERROR, "Lỗi kết nối"));
        }
      } else {
        return res.json(response.error(apiCode.INVALID_ACCESS_TOKEN));
      }
    });
  },
};
