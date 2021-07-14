class SubstringController {
  static async substr(req, res) {
    const queryString = req.urlInfo.searchParams;
    const input = queryString.get('input');
    const start = +queryString.get('start');
    const length = +queryString.get('length');

    if (!req.urlInfo.search || input === '' || start === '' || length === '') {
      res.writeHead(404);
      res.end(JSON.stringify({ "error": 'Enter all parameters' }));
      return

    }
    if (typeof input !== 'string' || typeof start !== 'number' || typeof length !== 'number') {
      res.writeHead(400);
      res.end(JSON.stringify({ "error": 'Invalid data' }));
      return
    }
    const result = await require(APP_PATH + '/domains/services/SimpleOptions').substr(input, start, length);

    res.writeHead(200);
    res.end(result);
    return
  }
}

module.exports = SubstringController;