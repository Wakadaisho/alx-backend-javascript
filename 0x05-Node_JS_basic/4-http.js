// Small server using http module

const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
  const body = 'Hello Holberton School!';
  res
    .writeHead(200, {
      'Content-Type': 'text/plain',
    })
    .end(body);
});

app.listen(1245);

module.exports = app;
