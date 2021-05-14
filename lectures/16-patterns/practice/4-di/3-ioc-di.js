/* eslint-disable default-case */
// IoC
const container = {
  registrations: {},
  register(key, resolver, deps = []) {
    this.registrations[key] = { resolver, deps };
  },
  resolve(key) {
    switch (true) {
      case isClass: {
        return new this.registrations[key](...deps);
      }
      case 'function' === typeof this.registrations[key]: {
        return this.registrations[key](...deps);
      }
      case 'object' === typeof this.registrations[key]: {
        return this.registrations[key];
      }
    }
  },
};
container.register('EmailBuilder', construct, ['mailChimpAccessor']);
container.register('mySingleton', { a: 42 });
container.register('mailChimpAccessor', MailChimpAccessor);
container.register('SmsBuilder', () => {
  return new SmsBuilder();
});
container.bind('ISenderBuilder', 'EmailBuilder');


// DI
function dependencyInjector() {
  // 1 Walk thru files
  // 2 detect all classes
  // 3 each analyze, register
}




class Obj {
  constructor(ISenderBuilder) {
    this.senderGateway =  ISenderBuilder;
  }
}
