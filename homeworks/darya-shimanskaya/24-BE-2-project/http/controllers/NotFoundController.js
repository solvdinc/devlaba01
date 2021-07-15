class NotFoundController {
  static async notFound(req, res) {
    res.writeHead(404);
    return JSON.stringify({ 'error': `Not found ${req.url}`, 'status': 404 });
  }
}
module.exports = NotFoundController;