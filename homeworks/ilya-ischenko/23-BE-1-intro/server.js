const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/views/index.html').pipe(res);
  } else if (req.url === '/assets/main.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.createReadStream(__dirname + '/assets/main.css').pipe(res);
  } else if (req.url === '/assets/main.js') {
    res.writeHead(200, { 'Content-Type': 'text/js' });
    fs.createReadStream(__dirname + '/assets/main.js').pipe(res);
  } else {
    res.end('404');
  }
});

fs.readFile('port.env', 'utf8', function (err, data) {
  process.env.PORT = +data || 8080;

  server.listen(process.env.PORT, 'localhost', () => {
    console.log('Listening');
  });
});
