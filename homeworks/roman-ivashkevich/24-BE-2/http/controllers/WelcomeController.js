class WelcomeController {
  static async home(req, res) {
    res.end(`home reached`);
  }

  static async notFound(req, res) {
    res.writeHead(404);
    res.end(
      JSON.stringify({
        error: `Route ${req.url} not found`,
      }),
    );
    return;
  }
}

module.exports = WelcomeController;
