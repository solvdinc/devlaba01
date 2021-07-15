class ReverseController {
  static async reverse(req, res) {
    const result = await require(PATH + '/domains/services/Operations').reverse(req)
    res.writeHead(JSON.parse(result)['status'])
    res.end(result)
  }
}

module.exports = ReverseController;