const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const autoIncrement = require("mongoose-auto-increment");

const userSchema = new mongoose.Schema({
  userID: { type: Number, default: 0, unique: true },
  name: {
    type: String,
    required: [true, "Bạn phải nhập tên !"],
  },
  email: {
    type: String,
    required: [true, "Bạn phải nhập email !"],
    unique: true,
    validate: [validator.isEmail, "Nhập đúng định dạng email !"],
  },
  phone: {
    type: String,
    unique: true,
    required: [true, "Bạn phải nhập số điện thoại !"],
    validate: {
      validator: function (el) {
        return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(el);
      },
      message: "Nhập đúng định dạng",
    },
  },
  avatar: {
    type: String,
    default: "default.jpg",
  },
  password: {
    type: String,
    required: [true, "Bạn phải nhập mật khẩu !"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Bạn phải nhập xác nhận mật khẩu !"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Xác nhận mật khẩu lỗi !",
    },
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//hash pass
userSchema.pre("save", async function (next) {
  //nếu k bị thay đổi thì cho chạy
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  //del password confirm ? k xoá dc
  this.passwordConfirm = await bcrypt.hash(this.passwordConfirm, 12);
  return next();
});
//hash password khi đăng nhập
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

autoIncrement.initialize(mongoose.connection); // This is important. You can remove initialization in different file
userSchema.plugin(autoIncrement.plugin, {
  model: "userSchema",
  field: "userID",
  startAt: 1,
  incrementBy: 1,
});
// userSchema.plugin(autoIncrement.plugin, 'User');
const User = mongoose.model("user", userSchema);
module.exports = User;
