class WelcomeController {
  static async home(req, res) {
    res.end(`home reached`);
  }

  static async notFound(req, res) {
    const jsonContent = { error: `Route ${req.urlInfo.pathname} not found` };
    const stringContent = JSON.stringify(jsonContent);

    await require('fs').promises.writeFile(
      APP_PATH + '/error.json',
      stringContent,
    );

    let pageContent = await require('fs').promises.readFile(
      APP_PATH + '/views/404.html',
    );

    pageContent = pageContent.toString().trim();

    res.writeHead(404);
    res.end(pageContent);
    return;
  }
}

module.exports = WelcomeController;
