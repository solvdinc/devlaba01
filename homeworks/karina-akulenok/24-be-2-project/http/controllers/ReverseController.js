class ReverseController {
  static async reverse(req, res) {
      const result = await require(APP_PATH + '/domains/services/OperationsService').reverse(req);

      res.writeHead(JSON.parse(result)['status']);
      res.write(result);
      res.end();
  }
}

module.exports = ReverseController;