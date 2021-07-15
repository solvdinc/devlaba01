class SubstrController {
  static async substr(req, res) {
      const result = await require(APP_PATH + '/domains/services/OperationsService').substr(req);

      res.writeHead(JSON.parse(result)['status']);
      res.write(result);
      res.end();
  }
}

module.exports = SubstrController;