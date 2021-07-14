class SubstringController {
  static async substr(req, res) {
    const result = await require(APP_PATH + '/domains/services/SimpleOptions').substr(req);
    
    res.writeHead(JSON.parse(result)['status']);
    res.end(result);
    return
  }
}

module.exports = SubstringController;