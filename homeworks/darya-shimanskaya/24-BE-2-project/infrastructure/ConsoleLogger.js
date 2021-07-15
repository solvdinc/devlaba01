/**
 * @implements {ILogger}
 */

class ConsoleLogger extends require('./interfaces/ILogger') {
  error(...args) {
    console.error(...args)
  }

  info(...args) {
    console.info(...args)
  }
}

module.exports = ConsoleLogger