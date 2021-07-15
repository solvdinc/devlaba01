/**
 * @interface ILogger
 */

class ILogger {
  info(...args) {
    throw new Error('You have to implement it!')
  }
  error(...args) {
    throw new Error('You have to implement it!')
  }
}

module.exports = ILogger