const fs = require('fs')
const FrontController = require('./FrontController')
class App {
  _routeList
  _router
  _http
  _frontController

  constructor(logger) {
    this._logger = logger
  }
  get(reference) {
    if ('logger' === reference) {
      return this._logger
    }
  }
  init() {
    this._routeList = fs
      .readdirSync(APP_PATH + '/routes')
      .map((fileName) => {
        if (!/\.js$/.test(fileName)) {
          return []
        }
        return require(APP_PATH + '/routes/' + fileName)
      })
      .flat(Infinity)

    this._router = new (require(APP_PATH + '/infrastructure/Router'))(
      this._routeList,
    )

    this._frontController = new (require(APP_PATH +
      '/infrastructure/FrontController'))(this._router)
    return this
  }
  boot() {
    this._http = require('http').createServer(
      this._frontController.handle.bind(this._frontController),
    )
    return this
  }

  start() {
    this._http.listen(
      process.env.PORT || 8080,
      process.env.HOST || 'localhost',
      () => {
        this._logger.info(`Server starting on PORT=${process.env.PORT}`)
      },
    )
  }
}
module.exports = App
