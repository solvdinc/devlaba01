class FrontController {
  /**
   *
   * @param {Router} router
   */

  constructor(router) {
    /**
     * @type {Router}
     * @private
     */
    this._router = router;
  }

  async handle(req, res) {
    const urlInfo = new (require('url').URL)(
      req.url,
      `http://${req.headers.host}`,
    );
    const sign = this._router.makeSign(req.method, urlInfo.pathname);

    let handler = this._router.resolve(sign);

    if (!handler) {
      handler = this._router.resolve('get *');
    }

    if (typeof handler !== 'function') {
      res.writeHead(404);
      res.end(
        JSON.stringify({
          err: {
            msg: 'Unexpected handler',
          },
        }),
      );
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
