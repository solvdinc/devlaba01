class WelcomeController {
  static async home(req, res) {
    res.writeHead(200);
    res.write('home page');
    res.end();
  }

  static async notFound(req, res) {
    res.writeHead(404);
    res.write(JSON.stringify({
        error: `${req.url} NOT FOUND`,
      }),
    );
    res.end();
  }
}

module.exports = WelcomeController;