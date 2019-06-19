const path = require("path");
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
// 정적 파일들의 경로설정하기
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const onListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onListening);
