const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // html 페이지를 응답한다.
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
