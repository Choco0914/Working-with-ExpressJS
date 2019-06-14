const express = require("express");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log("This is always run!");
  next(); // Allows the Request to continue to the next middleware in line
});

app.use("/app-product", (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use("/", (req, res, next) => {
  console.log("In middleware");
  res.send("<h1>Hello from Express!</h1>");
});

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onListening);
