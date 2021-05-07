function assert(n, ev) {
  if (!ev) {
    console.error(`Assert ${n} failed`);
    return;
  }
  console.info(`Assert ${n} OK`);
}

module.exports = assert;
