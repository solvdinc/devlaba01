const ComputingService = require('../../domains/services/ComputingService');

class HomeworkController {
  static async sum(req, res) {
    try {
      if (!req.urlInfo.search) {
        res.writeHead(200);
        res.end(
          JSON.stringify({
            message: 'Write route e.g.: /sum?num1=number&num2=number',
          }),
        );
        return;
      }

      const result = await ComputingService.sum(req);

      res.writeHead(200);
      res.end(
        JSON.stringify({
          result: result,
        }),
      );
      return;
    } catch (e) {
      res.end(
        JSON.stringify({
          error: {
            status: e.status,
            msg: e.message,
          },
        }),
      );
    }
  }

  static async substr(req, res) {
    try {
      if (!req.urlInfo.search) {
        res.end(
          JSON.stringify({
            message:
              'Enter string and another params, e.g.: /substr?str=apple&start=1&length=2',
          }),
        );
        return;
      }

      const result = await ComputingService.substr(req);

      res.writeHead(200);
      res.end(JSON.stringify({ result: result }));
      return;
    } catch (e) {
      res.end(
        JSON.stringify({
          error: {
            status: e.status,
            msg: e.message,
          },
        }),
      );
    }
  }

  static async reverse(req, res) {
    try {
      if (!req.urlInfo.search) {
        res.end(
          JSON.stringify({
            message: 'Write route e.g.: /reverse?string=apple',
          }),
        );
        return;
      }
      const result = await ComputingService.reverse(req);

      res.writeHead(200);
      res.end(JSON.stringify({ result: result }));
      return;
    } catch (e) {
      res.end(
        JSON.stringify({
          error: {
            status: e.status,
            msg: e.message,
          },
        }),
      );
    }
  }
}

module.exports = HomeworkController;
