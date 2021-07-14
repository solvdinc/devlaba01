class SubStringController {
  static async substr(req, res) {
    const str = req.urlInfo.searchParams.get("string");
    const start = +req.urlInfo.searchParams.get("start");
    const length = +req.urlInfo.searchParams.get("length");

    const result = await require(APP_PATH +
      "/infrastructure/BasicOperators").subStr(str, start, length);
    res.writeHead(JSON.parse(result)["status"]);
    res.end(result);
    return;
  }
}
module.exports = SubStringController;
