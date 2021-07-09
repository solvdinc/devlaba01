const app = require('./bootstrap');

try {
  app.init().boot().start();
} catch (e) {
  console.log(e);
}
