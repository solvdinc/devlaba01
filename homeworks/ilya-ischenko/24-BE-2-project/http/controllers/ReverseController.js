const StringService = require('../../app/StringService');
const nodePath = require('path');
const fs = require('fs');

class ReverseController {
  static reverse(req, res) {
    fs.createReadStream(
      nodePath.join(PUBLIC_PATH, 'views', 'reverse.html'),
    ).pipe(res);
  }

  static getReverseString(req, res) {
    StringService.getReverseString(req, res);
  }
}

module.exports = ReverseController;
