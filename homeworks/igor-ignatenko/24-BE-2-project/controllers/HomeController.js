class HomeController {
  static async start(req, res) {
    res.writeHead(200);
    res.end(JSON.stringify({ "message":" Hello user, it's home page", "status": 200 }));
  }
}

module.exports = HomeController;