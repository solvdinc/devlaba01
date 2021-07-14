class HomeController {
  static async start(req, res) {

    res.end(JSON.stringify({ "message": `Hello user, it's home page` }));
  }

}

module.exports = HomeController;