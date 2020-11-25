const multer = require("multer");
const sharp = require("sharp");
const User = require("./../models/userModels");
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await User.find();
    res.json({
      status: 1,
      message: "Thành công!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: 0,
      message: "Thất bại khi lấy user!",
    });
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.json({
      status: 1,
      message: "Tạo mới thành công!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: 0,
      message: "Thất bại!",
      error: error,
    });
  }
};

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    //lấy các keys của req.body truyền vào
    if (allowedFields.includes(el)) {
      //lọc chỉ nhận những giá trị trong obj = allowedFields
      //sau đó lưu lại cái newObj[tại cái phần tử giống] = obj[tại cái phần tử giống đó]
      newObj[el] = obj[el];
    }
  });
  return newObj;
};