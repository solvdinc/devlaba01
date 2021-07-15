class SubstrController {
  static async substr(req, res) {
    const result = await require(PATH + '/domains/services/Operations').substr(req)
    res.writeHead(JSON.parse(result)['status'])
    res.end(result)
  }
}

module.exports = SubstrController