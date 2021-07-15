class ReverseController {
  static async reverse(req, res) {
    const reverseStr = req.urlInfo.searchParams.get("string");

    const result = await require(APP_PATH +
      "/infrastructure/BasicOperators").reverse(reverseStr);
    res.writeHead(JSON.parse(result)["status"]);
    res.end(result);
    return;
  }
}
module.exports = ReverseController;
