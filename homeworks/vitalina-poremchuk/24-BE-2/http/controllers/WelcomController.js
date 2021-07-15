class WelcomController {
  static home(req, res) {
    res.end("home page");
  }

  static async notFound(req, res) {
    res.writeHead(404);
    res.end(
      JSON.stringify({
        error: `Route ${req.url} not found`,
      })
    );
    return;
  }
}
module.exports = WelcomController;
