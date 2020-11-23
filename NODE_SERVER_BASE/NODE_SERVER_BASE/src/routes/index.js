var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
  res.send(req.protocol);
});

module.exports = router;