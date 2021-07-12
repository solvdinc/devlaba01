const http = require('http');
const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
const port = env.split(':')[1];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/assets/main.css') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream(__dirname + '/assets/main.css').pipe(res);
  } else if (req.url === '/assets/main.js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/js');
    fs.createReadStream(__dirname + '/assets/main.js').pipe(res);
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(+port || 8080, 'localhost', () => {
  console.log('Loading...');
});
