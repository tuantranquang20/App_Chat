const { debug, apiCode, IS_ACTIVE, ROLE } = require("@utils/constant");
const userService = require("../service/userService");
const bcrypt = require("bcrypt");
const { user } = require("@models");
const hat = require("hat");
// login
async function login(req, res) {
  try {
    //   bcrypt.hash("0975545828", 10, function (err, hash) {
    //     debug.debug(hash);
    //   });
    //   return {};
    const currentUser = await user.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });
    // return currentUser;
    if (!currentUser) return Promise.reject({ code: apiCode.LOGIN_FAIL });

    const comparePassword = async (leftPass, rightPass) => {
      return new Promise((resolve, reject) => {
        bcrypt.compare(leftPass, rightPass, function (err, resp) {
          if (resp) {
            return resolve(true);
          }
          return resolve(false);
        });
      });
    };

    const isValidPassword = await comparePassword(
      req.body.password,
      currentUser.password
    );
    if (!isValidPassword) return Promise.reject({ code: apiCode.LOGIN_FAIL });
    await user.update(
      {
        token: hat(),
        device_id: "device_id",
        last_login_date: Date.now(),
      },
      {
        where: {
          id: currentUser.id,
        },
      }
    );
    return await userService.detail(currentUser.id);
  } catch (error) {
    debug.error(error);
    return Promise.reject({
      code: error.code || apiCode.DB_ERROR,
    });
  }
}

async function list(req, res) {
  try {
    var data = await userService.listUser();
    return data;
  } catch (error) {
    debug.error(error);
    return Promise.reject({
      code: error.code || apiCode.DB_ERROR,
    });
  }
}

module.exports = {
  list,
  login,
};
