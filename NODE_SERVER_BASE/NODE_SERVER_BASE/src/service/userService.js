const { user } = require("@models");

async function listUser() {
  try {
    var users = await user.findAll();
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function detail(id, fullUrl) {
  var userDetail = await user.findOne({
    where: {
      id: id,
    },
  });
  return userDetail;
}
module.exports = {
  listUser,
  detail
};
