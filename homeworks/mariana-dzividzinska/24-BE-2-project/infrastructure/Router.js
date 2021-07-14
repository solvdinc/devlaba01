const nodePath = require('path');
class Router {
  _handlers = {};

  constructor(routeList) {
    this._parse(routeList);
  }

  _parse(routeList) {
    routeList.forEach((route) => {
      const sign = this.makeSign(route.method, route.path);

      const controller = require(nodePath.join(
        APP_PATH,
        '/app/http/controllers/',
        route.resolver.controller,
      ));

      if ('function' !== typeof controller[route.resolver.action]) {
        throw new Error(`No action found for ${route.resolver.controller}`);
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
