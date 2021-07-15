require('dotenv').config();
const nodePath = require('path');
global.APP_PATH = nodePath.resolve(__dirname);

const logger = new (require(nodePath.join(
  APP_PATH,
  '/infrastructure/ConsoleLogger',
)))();

const app = new (require(nodePath.join(APP_PATH, '/infrastructure/App')))(
  logger,
);

module.exports = app;
