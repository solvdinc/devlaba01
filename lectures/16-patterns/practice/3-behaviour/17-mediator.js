/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomerList(name);
  }

  addToCustomerList(name) {
    this.customers.push(name);
  }

  getCustonerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();

const misha = new Customer('Misha', mediator);
const dima = new Customer('Dima', mediator);

misha.makeOrder('Tesla', 'With autopilot');
dima.makeOrder('BMW', '320 hourses');

console.log(mediator.getCustonerList());
