const path = require('path');

global.APP_PATH = path.resolve(__dirname);

const app = new (require(APP_PATH + '/infrastructure/App'))();

module.exports = app;
