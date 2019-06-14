const express = require("express");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // Allows the Request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In the another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onListening);
