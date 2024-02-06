const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");

  const { url, method } = req;

  console.log(`${method} ${url}`);

  switch (url) {
    case "/":
      res.statusCode = 200;
      res.end("Hello! welcome to my server");
      break;
    case "/about":
      res.statusCode = 200;
      res.end("this is a basic http server in Node.js");
      break;
    default:
      res.statusCode = 404;
      res.end("ooops. route not found");
      break;
  }
});

const port = 8080;
const hostname = "127.0.0.1";

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
