const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // html 페이지를 응답한다.
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
