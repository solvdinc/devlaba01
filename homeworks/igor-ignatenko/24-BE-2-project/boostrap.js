const path = require('path');
global.APP_PATH = path.resolve(__dirname);
require('dotenv').config();

// Logger
/** @type {ILogger} */
const logger = new (require(APP_PATH + '/infrastructure/ConsoleLogger'))();

const app = new ((require(APP_PATH + '/infrastructure/App')))(logger);

module.exports = app;
