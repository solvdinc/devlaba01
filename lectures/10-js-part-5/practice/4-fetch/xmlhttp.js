const url = 'https://book-bag-strapi-t6xqz.ondigitalocean.app/players';

// GET
// const xhr = new XMLHttpRequest();

// xhr.open('GET', url);

// xhr.send();

// xhr.onload = () => {
//   console.log(xhr);
// };

// xhr.onerror = () => {
//   console.log(2222);
// };

// GET synchronius

// const xhr = new XMLHttpRequest();

// xhr.open('GET', url, false);

// try {
//   xhr.send();
//   console.log(xhr.response);
// } catch (error) {
//   console.log(error);
// }

// POST

const player = {
  first_name: 'Tolik',
  last_name: 'Anabolik',
  email: 'ta@gmail.com',
  club: 'Power',
};

const xhr = new XMLHttpRequest();

xhr.open('POST', url);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(JSON.stringify(player));

xhr.onload = () => {
  console.log(xhr.response);
};

xhr.onerror = () => {
  console.log(2222);
};
