class Router {
  _handlers = {};
  constructor(routeList) {
    this._parse(routeList);
  }
  _parse(routeList) {
    routeList.forEach((route) => {
      const sign = `${route.method} ${route.path}`;
      const controller = require(APP_PATH +
        "/http/controllers/" +
        route.resolver.controller);
      if ("function" !== typeof controller[route.resolver.action]) {
        throw new Error(`no action found for ${route.resolver.controller} `);
      }
      this._handlers[sign] = controller[route.resolver.action];
    });
  }
  resolve(sign) {
    return this._handlers[sign] || null;
  }
  makeSign(method, path) {
    return `${method.toLowerCase()} ${path}`;
  }

  set(sign, handler) {
    this._handlers[sign] = handler;
  }
}
module.exports = Router;
