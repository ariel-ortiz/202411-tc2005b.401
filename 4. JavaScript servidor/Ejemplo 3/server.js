const http = require('http');

const port = 8080;
const ipAddr = '52.20.170.244';

const server = http.createServer((req, res) => {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I am Groot\n');
});

server.listen(port, () => {
  console.log(`Server running at http://${ipAddr}:${port}/`);
});
