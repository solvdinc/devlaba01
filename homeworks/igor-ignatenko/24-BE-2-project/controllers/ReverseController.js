class ReverseController {
  static async reverse(req, res) {
    const result = await require(APP_PATH + '/domains/services/SimpleOptions').reverse(req);

    res.writeHead(JSON.parse(result)['status']);
    res.end(result);
    return
  }
}

module.exports = ReverseController;