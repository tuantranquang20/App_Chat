"use strict";

module.exports = {
  error: function(error, message = null) {
    return {
      status: 0,
      code: error.code,
      msg: message || error.message,
      data: {}
    };
  },
  success: function(data, message = "Thành công") {
    return {
      status: 1,
      code: 1,
      msg: message,
      data: data
    };
  }
};
