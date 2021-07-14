const nodepath = require("path");
global.APP_PATH = nodepath.resolve(__dirname);

const logger = new (require(APP_PATH + "/infrastructure/ConsoleLogger"))();
const app = new (require(APP_PATH + "/infrastructure/App"))(logger);

process.env.ENV = "development";
process.env.PORT = 8000;
module.exports = app;
