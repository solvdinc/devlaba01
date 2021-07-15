const fs = require('fs')
class App {
  _routeList
  _router
  _http
  /**
   * type {FrontController}
   * @private
   */
  _frontController

  /**
   *
   * @param {ILogger}logger
   */
  constructor(logger) {
    this._logger = logger
  }

  init() {
    //routeList
    this. _routeList = fs.readdirSync(PATH + '/routes')
      .map(filename => {
        if (!/\.js$/.test(filename)){
          return []
        }
        return require(PATH + '/routes/' + filename)
      }).flat(Infinity)

    //router
    this._router = new (require(PATH + '/infrastructure/Router'))(this._routeList)

    //front controller
    this._frontController = new (require(PATH + '/infrastructure/FrontController'))(this._router)

    return this
  }

  boot() {
    this._http = require('http').createServer(this._frontController.handle.bind(this._frontController))
    return this
  }

  start() {
    this._http.listen(process.env.PORT || 8080, process.env.HOST || 'localhost', () => {
      this._logger.info(`Server running at http://localhost:${process.env.PORT}`)
    })
  }

  get(reference) {
    if ('logger' === reference) {
      return this._logger
    }
  }
}

module.exports = App