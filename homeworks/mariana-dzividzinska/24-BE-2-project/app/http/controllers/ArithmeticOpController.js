const fs = require('fs');
const nodePath = require('path');
const ArithmeticOpService = require('../../services/ArithmeticOpService');

class ArithmeticController {
  static sumGet(req, res) {
    fs.createReadStream(nodePath.join(APP_PATH, '/public/pages/sum.html')).pipe(
      res,
    );
  }

  static sumPost(req, res) {
    let data = '';
    let responseBody;
    req
      .on('data', (chunk) => {
        data = JSON.parse(chunk);
      })
      .on('end', () => {
        if (!data.num1 || !data.num2) {
          res.statusCode = 404;
          responseBody = {
            error: {
              code: 2,
              msg: 'Request data must contain fields for  num1 and num2',
            },
          };
        } else if (
          Number.isNaN(Number.parseInt(data.num1)) ||
          Number.isNaN(Number.parseInt(data.num2))
        ) {
          res.statusCode = 400;
          responseBody = {
            error: {
              code: 1,
              msg: 'Request data must be number',
            },
          };
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          responseBody = {
            sum: ArithmeticOpService.calculateSum(+data.num1, +data.num2),
          };
        }

        res.write(JSON.stringify(responseBody));
        res.end();
      });
  }
}

module.exports = ArithmeticController;
