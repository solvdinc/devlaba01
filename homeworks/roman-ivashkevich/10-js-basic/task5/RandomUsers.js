import { getDataWithFetchMethod, getDataWithXMLHttpRequest } from './Data.js';
import createDOMElement from './createDOMElement.js';

export default class RandomUser {
  constructor(gender, count) {
    this.data = [];
    this.gender = gender;
    this.count = count;
  }

  handleData() {
    getDataWithFetchMethod(this.gender, this.count)
      .then((data) => {
        this.data = data.results;
        this.createUserCard();
      })
      .catch((err) => console.log(err));

    // getDataWithXMLHttpRequest(this.gender, this.count)
    //   .then((data) => {
    //     this.data = data.results;
    //     this.createUserCard();
    //   })
    //   .catch((err) => console.log(err));

    return this;
  }

  createUserCard() {
    const cardsContainer = document.querySelector('.cards');

    this.data.map((card) =>
      createDOMElement(
        'div',
        'card',
        [
          createDOMElement('img', 'card__img', null, null, [
            'src',
            `${card.picture.large}`,
          ]),
          createDOMElement(
            'p',
            'card__description',
            `${card.name.first} ${card.name.last}`,
            null,
          ),
        ],
        cardsContainer,
      ),
    );
  }

  createLayout() {
    this.wrapper = createDOMElement(
      'div',
      'wrapper',
      [
        createDOMElement('h1', 'title', 'Runners', null),
        createDOMElement('div', 'cards', null, null),
      ],
      document.body,
    );
  }
}
