class SumController {
  static async sum(req, res) {
    const queryString = req.urlInfo.searchParams;
    const num1 = queryString.get('num1');
    const num2 = queryString.get('num2');

    if (!req.urlInfo.search || num1 === '' || num2 === '') {
      res.writeHead(400);
      res.end(JSON.stringify({ "error": 'Pls enter all numbers' }));
      return

    }
    const result = await require(APP_PATH + '/domains/services/SimpleOptions').sum(num1, num2);

    res.writeHead(200);
    res.end(result);
    return
  }
}

module.exports = SumController;