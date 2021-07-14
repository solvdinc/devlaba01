class NotFoundController {
  static async notFound(req, res) {
    res.writeHead((404)["status"]);
    return JSON.stringify({ error: `Not found ${req.url}` });
  }
}
module.exports = NotFoundController;