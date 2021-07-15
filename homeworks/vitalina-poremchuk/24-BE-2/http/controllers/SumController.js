class SumController {
  static async sum(req, res) {
    const num1 = req.urlInfo.searchParams.get("num1");
    const num2 = req.urlInfo.searchParams.get("num2");

    const result = await require(APP_PATH +
      "/infrastructure/BasicOperators").sum(num1, num2);
    res.writeHead(JSON.parse(result)["status"]);
    res.end(result);
    return;
  }
}
module.exports = SumController;
