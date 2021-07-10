class HomeworkController {
  static async sum(req, res) {
    if (!req.urlInfo.search) {
      res.end('Enter numbers');
      return;
    } else {
      let pageContent = await require('fs').promises.readFile(
        APP_PATH + '/views/sum.html',
      );
      pageContent = pageContent.toString().trim();

      const arrOfNumbers = req.urlInfo.search.match(/(\-?)(\d+)/g);
      if (!arrOfNumbers) {
        throw new Error('Not enough numbers for operations');
      }
      const sumOfNumbers = arrOfNumbers.reduce(
        (acc, el) => acc + Number(el),
        0,
      );

      const obj = {
        num1: +arrOfNumbers[0],
        num2: +arrOfNumbers[1],
        sum: sumOfNumbers,
      };

      const readyContent = pageContent.replace(
        /%([a-zA-Z0-9]+)%/g,
        (_, sub) => obj[sub],
      );

      res.writeHead(200);
      res.end(readyContent);
      return;
    }
  }

  static async substr(req, res) {
    if (!req.urlInfo.search) {
      res.end('Enter string and char');
      return;
    } else {
      let pageContent = await require('fs').promises.readFile(
        APP_PATH + '/views/substr.html',
      );
      pageContent = pageContent.toString().trim();

      const [string, char] = req.urlInfo.search.match(/([A-Za-z]+)/g);

      if (!string || !char) {
        throw new Error('No string or char');
      }

      const index = string.indexOf(char);

      const obj = {
        word: string,
        char: char,
        index: index < 0 ? 'No matches' : index,
      };

      const readyContent = pageContent.replace(
        /%([a-zA-Z]+)%/g,
        (_, sub) => obj[sub],
      );

      res.writeHead(200);
      res.end(readyContent);
      return;
    }
  }

  static async reverse(req, res) {
    if (!req.urlInfo.search) {
      res.end('Enter string');
      return;
    } else {
      let pageContent = await require('fs').promises.readFile(
        APP_PATH + '/views/reverse.html',
      );
      pageContent = pageContent.toString().trim();

      const reqString = req.urlInfo.search
        .match(/([A-Za-z]+)/g)
        .join('')
        .trim();

      if ('string' !== typeof reqString) {
        throw new Error('Invalid string');
      }

      const reverseStr = reqString.split('').reverse().join('');

      const obj = {
        string: reqString,
        reverse: reverseStr,
      };

      const readyContent = pageContent.replace(
        /%([a-zA-Z]+)%/g,
        (_, sub) => obj[sub],
      );

      res.writeHead(200);
      res.end(readyContent);
      return;
    }
  }
}

module.exports = HomeworkController;
