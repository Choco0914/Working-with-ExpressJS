const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><meta charset='utf-8'><title>연습</title></heade>");
    res.write(
      "<body><form method='POST' action='/create-user'><input placeholder='이름을 입력해주세요' type='text' name='user'/><button type='submit'>입력</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/user") {
    res.write("<html>");
    res.write(`<head><meta charset='utf-8'><title>연습 ${url}</title></heade>`);
    res.write("<body><ul><li>User 1</li></ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><meta charset='utf-8'><title>연습</title></heade>");
  res.write("<body></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  requestHandler
};
