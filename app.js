const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const PORT = 3000;

// 데이터를  다루기 위한 미들웨어
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onListening);
