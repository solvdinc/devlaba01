const ILogger = require("./ILogger");
/**
 * @implements {ILogger}
 */
class ConsoleLogger extends ILogger {
  info(...args) {
    console.info(...args);
  }

  error(...args) {
    console.error(...args);
  }
}

module.exports = ConsoleLogger;
