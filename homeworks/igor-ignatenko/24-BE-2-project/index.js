const app = require('./boostrap');

try {
  app.init().boot().start();
} catch (e) {
  app.get('logger').error(e);
}
