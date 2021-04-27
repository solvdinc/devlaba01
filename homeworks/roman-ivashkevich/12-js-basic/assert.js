const assert = (n, comp) => {
  if (!comp) {
    console.error(`Assert ${n} failed`);
    return;
  }

  console.info(`Assert ${n} OK`);
};

module.exports = assert;
