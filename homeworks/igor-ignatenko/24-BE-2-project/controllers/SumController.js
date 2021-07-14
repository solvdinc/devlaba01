class SumController {
  static async sum(req, res) {
    const result = await require(APP_PATH + '/domains/services/SimpleOptions').sum(req);

    res.writeHead(JSON.parse(result)['status']);
    res.end(result);
    return
  }
}

module.exports = SumController;