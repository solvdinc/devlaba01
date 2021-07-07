'use strict';
import http from 'http';
import fs from 'fs';
import { URL } from 'url';

const PORT = 5000;
const PATHS = {
  HTML: '/',
  CSS: '/assets/main.css',
  JS: '/assets/main.js',
};

http
  .createServer(async (req, res) => {
    const urlInfo = new URL(req.url, `http://${req.headers.host}`);

    const openFile = (filePath, contentType) => {
      fs.readFile(filePath, (err, data) => {
        try {
          if (err) {
            throw new Error('Can`t find path');
          }
          res.writeHead(200, {
            'Content-Type': contentType,
          });
          res.write(data);
          return res.end();
        } catch (e) {
          console.log(e);
        }
      });
    };

    switch (urlInfo.pathname) {
      case PATHS.HTML: {
        try {
          openFile('./client/index.html', 'text/html');
          break;
        } catch (e) {
          console.log(e);
        }
      }
      case PATHS.CSS: {
        try {
          openFile('./client/assets/main.css', 'text/css');
          break;
        } catch (e) {
          console.log(e);
        }
      }
      case PATHS.JS: {
        try {
          openFile('./client/assets/main.js', 'text/js');
          break;
        } catch (e) {
          console.log(e);
        }
      }
      default: {
        res.statusCode = 404;
        res.end('Page not found');
      }
    }
  })
  .listen(PORT, 'localhost', () => {
    console.log(`Server kicks off on PORT=${PORT}`);
  });
