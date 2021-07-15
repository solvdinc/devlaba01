require('dotenv').config()
global.PATH = require('path').resolve(__dirname)

/**
 * @type {ILogger}
 */

const logger = new (require(PATH + '/infrastructure/ConsoleLogger'))
const app = new (require (PATH + '/infrastructure/App'))(logger)

module.exports = app