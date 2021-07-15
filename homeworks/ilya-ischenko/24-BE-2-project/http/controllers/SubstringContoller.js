const StringService = require('../../app/StringService');
const nodePath = require('path');
const fs = require('fs');

class SubstringController {
  static substring(req, res) {
    fs.createReadStream(
      nodePath.join(PUBLIC_PATH, 'views', 'substring.html'),
    ).pipe(res);
  }

  static getSubstringIndex(req, res) {
    StringService.getSubstringIndex(req, res);
  }
}

module.exports = SubstringController;
