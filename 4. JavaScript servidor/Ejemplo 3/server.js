const http = require('http');

const port = 8080;
const ipAddr = '52.20.170.244';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>I am Groot</title>
      </head>
      <body>
        <h1>Hello Groot!</h1>
        <p>
          This is a test.
        </p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://${ipAddr}:${port}/`);
});
