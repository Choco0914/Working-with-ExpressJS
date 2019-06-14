const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/app-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onListening);
