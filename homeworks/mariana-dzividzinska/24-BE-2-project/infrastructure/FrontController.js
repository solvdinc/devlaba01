class FrontController {
  constructor(router) {
    this._router = router;
  }

  async handle(req, res) {
    const urlInfo = new (require('url').URL)(
      req.url,
      `http://${req.headers.host}`,
    );
    const sign = this._router.makeSign(req.method, urlInfo.pathname);

    const handler = this._router.resolve(sign);

    if (typeof handler !== 'function') {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: `Route ${req.url} not found` }));
      return;
    }

    req.urlInfo = urlInfo;
    const result = handler(req, res);
    if (result instanceof Promise) {
      await result;
    }
  }
}

module.exports = FrontController;
