class ReverseController {
  static async reverse(req, res) {
    const stringForReverse = req.urlInfo.searchParams.get('input');

    if (!req.urlInfo.search || stringForReverse === '') {
      res.writeHead(404);
      res.end(JSON.stringify({ "error": 'Enter yr string' }));
      return

    }
    if (typeof stringForReverse !== 'string') {
      res.writeHead(400);
      res.end(JSON.stringify({ "error": 'Invalid data' }));
    }
    const result = await require(APP__PATH + '/domains/services/SimpleOptions').reverse(stringForReverse);
    res.writeHead(200);
    res.end(result);
    return

  }
}

module.exports = ReverseController;