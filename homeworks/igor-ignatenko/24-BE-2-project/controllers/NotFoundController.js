class NotFoundController {
  static async notFound(req, res) {
    res.writeHead(404);
    res.end(JSON.stringify({ "error": `Router ${req.url} not found`, "status": 404 }));
    return
  }
}

module.exports = NotFoundController;