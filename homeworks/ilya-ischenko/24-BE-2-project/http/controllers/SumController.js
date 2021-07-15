const NumberService = require('../../app/NumberService');
const nodePath = require('path');
const fs = require('fs');

class SumController {
  static sum(req, res) {
    fs.createReadStream(nodePath.join(PUBLIC_PATH, 'views', 'sum.html')).pipe(
      res,
    );
  }

  static makeSum(req, res) {
    NumberService.makeSum(req, res);
  }
}

module.exports = SumController;
