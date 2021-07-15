class NumberService {
  static makeSum(req, res) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const { num1, num2 } = JSON.parse(body);
        const result = +num1 + +num2;

        if (!result && result !== 0) {
          throw new Error();
        }

        res.writeHead(200);
        res.end(JSON.stringify({ result }));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'smth went wrong' }));
      }
    });
  }
}

module.exports = NumberService;
