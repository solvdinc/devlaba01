class SumController {
  static async sum(req, res) {
      const result = await require(APP_PATH + '/domains/services/OperationsService').sum(req);

      res.writeHead(JSON.parse(result)['status']);
      res.write(result);
      res.end();
  }
}

module.exports = SumController;