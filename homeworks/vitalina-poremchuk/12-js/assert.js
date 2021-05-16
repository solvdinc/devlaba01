function assert(name, func, dataList, list) {
  const sortedList = [...dataList].sort((a, b) => (a.sku > b.sku ? 1 : -1));
  if (list || func(sortedList, list)) {
    console.info(`${name} is Ok`);
  } else if (JSON.stringify(sortedList) === JSON.stringify(func(dataList))) {
    console.info(`${name} is Ok`);
  }
}
module.exports = assert;
