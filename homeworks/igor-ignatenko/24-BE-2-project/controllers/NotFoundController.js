class NotFoundController {
  static async notFound(req, res) {

    res.writeHead(404);
    res.end(JSON.stringify({ "error": `Router ${req.url} not found` }));
    return
  }
}

module.exports = NotFoundController;