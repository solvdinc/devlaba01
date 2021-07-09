const fs = require('fs');
require('dotenv').config();

class App {
  _routeList;
  _router;
  _http;
  _frontController;

  init() {
    //routeList
    this._routeList = fs
      .readdirSync(APP_PATH + '/routes')
      .map((fileName) => {
        if (!/\.js$/.test(fileName)) {
          return [];
        }
        return require(APP_PATH + '/routes/' + fileName);
      })
      .flat(Infinity);

    //router
    this._router = new (require(APP_PATH + '/infrastructure/Router'))(
      this._routeList,
    );

    //front controller
    this._frontController = new (require(APP_PATH +
      '/infrastructure/FrontController'))(this._router);

    return this;
  }
  boot() {
    this._http = require('http').createServer(
      this._frontController.handle.bind(this._frontController),
    );
    return this;
  }
  start() {
    //http listen
    this._http.listen(process.env.PORT || 7000, 'localhost', () => {
      console.log(`Server start on PORT=${process.env.PORT}`);
    });
  }
}

module.exports = App;
