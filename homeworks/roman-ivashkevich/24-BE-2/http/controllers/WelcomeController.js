class WelcomeController {
  static async home(req, res) {
    await new Promise((r) => setTimeout(r, 1500));
    res.end(`home reached`);
  }
}

module.exports = WelcomeController;
