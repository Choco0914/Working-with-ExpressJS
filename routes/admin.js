const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

// /admin/add-product =>GET
router.get("/add-product", (req, res, next) => {
  // html 페이지를 응답한다.
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
