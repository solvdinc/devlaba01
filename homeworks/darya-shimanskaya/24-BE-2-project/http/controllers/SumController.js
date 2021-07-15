class SumController {
  static async sum(req, res) {
    const result = await require(PATH + '/domains/services/Operations').sum(req)
    res.writeHead(JSON.parse(result)['status'])
    res.end(result)
  }
}

module.exports = SumController;