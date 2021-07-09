class HomeworkController {
  static sum(req, res) {
    console.log(req.urlInfo);
    const numbers = req.urlInfo.search.match(/(\-?)(\d+)/g);
    res.end(`${+numbers[0] + +numbers[1]}`);
  }

  // static sum(req, res) {
  //   res.end(`home reached`);
  // }

  // static sum(req, res) {
  //   res.end(`home reached`);
  // }
}

module.exports = HomeworkController;
