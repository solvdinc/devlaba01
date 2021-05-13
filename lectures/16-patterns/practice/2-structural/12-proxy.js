function networkFetch(url) {
  return `${url} - Answer from server`;
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Answer from cache`;
    }

    cache.add(url);
    return Reflect.apply(target, this, args);
  },
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));
