const http = require('http')
const fs = require('fs')
const { URL } = require('url')

if (fs.existsSync('./.env')) {
  fs.readFileSync('./.env').toString().split('\n').forEach((line) => {
   const [variable, value] = line.split('=')
    process.env[variable] = value
    }
  )
}

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST

const server = http.createServer((req, res) => {
  const path = new URL(req.url, `http://${req.headers.host}`)

  if (path.pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  } else {
      if (fs.existsSync(__dirname + `${path.pathname}`)){
        const contentType = path.pathname
          .split('/')
          .pop()
          .split('.')
          .pop()
        res.writeHead(200, {'Content-Type': `text/${contentType}`})
        fs.createReadStream(__dirname + `${path.pathname}`).pipe(res)
      } else {
          res.writeHead(404, {})
          res.end('page not found')
      }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})
