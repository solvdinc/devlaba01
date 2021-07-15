class HomeController {
  static async home(req, res) {
    res.writeHead(200);
    res.end(JSON.stringify({ 'message':'It\'s home page' }))
  }
}

module.exports = HomeController