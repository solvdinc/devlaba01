const http = require('http');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const port = env
  .split('\n')
  .find((str) => str.includes('PORT'))
  .split('=')[1];
process.env.PORT = +port || 8080;

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

server.listen(process.env.PORT, 'localhost', () => {
  console.log('Listening');
});
