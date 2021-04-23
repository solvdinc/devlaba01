/* eslint-disable no-undef */

// Task 5 Fetch API/XMLHttpRequest
const URL = 'https://randomuser.me/api/?gender=female&results=10';

const showError = (elem, text) => {
  const errorElement = document.createElement('p');
  errorElement.classList.add('error-msg');
  errorElement.textContent = text;
  elem.append(errorElement);
};

// Fetch request
const getUsersWithFetch = async (cb) => {
  try {
    const response = await fetch(URL).then((res) => res.json());
    cb(response.results);
  } catch (error) {
    const container = document.getElementById('container');
    showError(container, 'Cant load users... Sorry.');
  }
};

// XmlHttpRequest
const getUsersWithXmlHttpRequest = async (cb) => {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', URL + 231123);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status !== 200) {
      const container = document.getElementById('container');
      showError(container, 'Cant load users... Sorry.');
    }
    const response = JSON.parse(xhr.response);
    cb(response.results);
  };
};

const drowUsers = async (users) => {
  const container = document.getElementById('container');

  users.forEach((person) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    h2.textContent = `${person.name.first} ${person.name.last}`;
    img.src = person.picture.medium;
    article.className = 'card';

    article.append(img);
    article.append(h2);

    container.append(article);
  });
};

getUsersWithFetch(drowUsers);
getUsersWithXmlHttpRequest(drowUsers);
