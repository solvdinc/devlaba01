class Router {
  _handlers = {};

  /**
   * @param {{method: string, path: string, resolver: {controller: string, action: string}}[]} 
   */

  constructor(routeList) {
    this._parse(routeList);
  }

  _parse(routeList) {
    routeList.forEach((route) => {

      const sign = this.makeSign(route.method, route.path);
      const controller = require(APP_PATH +
        '/controllers/' +
        route.resolver.controller);
      console.log(typeof controller[route.resolver.action])
      if (typeof controller[route.resolver.action] !== 'function') {
        throw new Error(`No action found for ${route.resolver.action}`)
      }

      this._handlers[sign] = controller[route.resolver.action];
    });
  }

  resolve(sign) {
    return this._handlers[sign] || null
  }

  makeSign(method, path) {
    return `${method.toLowerCase()} ${path}`
  }

  set(sign, handler) {
    this._handlers[sign] = handler;
  }
}
module.exports = Router;