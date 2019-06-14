const http = require("http");

const express = require("express");

const app = express();

const server = http.createServer(app);

const PORT = 3000;

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // Allows the Request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In the another middleware");
});

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

server.listen(PORT, onListening);
