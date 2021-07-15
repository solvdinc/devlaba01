const app = require("./bootsrap");
try {
  app.init().boot().start();
} catch (e) {
  app.get("logger").error(e);
}
