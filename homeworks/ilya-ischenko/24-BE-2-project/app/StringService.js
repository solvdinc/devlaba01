class StringService {
  static getReverseString(req, res) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const { string } = JSON.parse(body);
        const result = string.split('').reverse().join('');

        res.writeHead(200);
        res.end(JSON.stringify({ result }));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'smth went wrong' }));
      }
    });
  }

  static getSubstringIndex(req, res) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const { string, substring } = JSON.parse(body);
        const result = string.indexOf(substring);

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

module.exports = StringService;