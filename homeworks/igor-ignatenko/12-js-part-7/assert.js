module.exports = function assert(bodyFunc, data, wantedItem) {
    const sortedData = [...data].sort((a, b) => (a.sku > b.sku ? 1 : -1));
    if (wantedItem && bodyFunc(sortedData, wantedItem)) {
        return true;
    } else if (JSON.stringify(sortedData) === JSON.stringify(bodyFunc(data))) {
        return true;
    }
    return false;
}

