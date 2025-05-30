const http = require('http');

const port = 8080;

const requestHandler = (req, res) => {
  res.end('Hello from BLUE version of the Node.js app!');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Blue app listening on port ${port}`);
});
