const fs = require('fs');
const nodePath = require('path');
const StringOpService = require('../../services/StringOpService');

class StringOperationsController {
  static indexOfGetPage(req, res) {
    fs.createReadStream(
      nodePath.join(APP_PATH, '/public/pages/indexOf.html'),
    ).pipe(res);
  }

  static indexOfPost(req, res) {
    let data = '';
    let responseBody;
    req
      .on('data', (chunk) => {
        data = JSON.parse(chunk);
      })
      .on('end', () => {
        if (!data.string || !data.substring) {
          res.statusCode = 404;
          responseBody = {
            error: {
              code: 2,
              msg: 'Request data must contain fields for string and substring',
            },
          };
        } else {
          responseBody = {
            index: StringOpService.indexOf(data.string, data.substring),
          };
        }
        res.write(JSON.stringify(responseBody));
        res.end();
      });
  }

  static reverseGetPage(req, res) {
    fs.createReadStream(
      nodePath.join(APP_PATH, '/public/pages/reverse.html'),
    ).pipe(res);
  }

  static reversePost(req, res) {
    let data = '';
    let responseBody;
    req
      .on('data', (chunk) => {
        data = JSON.parse(chunk);
      })
      .on('end', () => {
        if (!data.string) {
          res.statusCode = 404;
          responseBody = {
            error: {
              code: 2,
              msg: 'Request data must contain fields for string',
            },
          };
        } else {
          responseBody = {
            reverseString: StringOpService.reverse(data.string),
          };
        }
        res.write(JSON.stringify(responseBody));
        res.end();
      });
  }
}

module.exports = StringOperationsController;
