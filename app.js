const http = require("http");

const express = require("express");

const app = express();

const server = http.createServer(app);

const PORT = 3000;

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

server.listen(PORT, onListening);
