/* eslint-disable no-undef */

// Task 5 Fetch API/XMLHttpRequest
const URL = 'https://randomuser.me/api/?gender=female&results=10';

// Fetch request
const getUsersWithFetch = async (cb) => {
  const response = await fetch(URL).then((res) => res.json());
  cb(response.results);
};

// XmlHttpRequest
const getUsersWithXmlHttpRequest = async (cb) => {
  const xhr = new XMLHttpRequest();

  try {
    xhr.open('GET', URL);
    xhr.send();
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
      cb(response.results);
    };

    return xhr;
  } catch (err) {
    console.error(`Something went wrong... ${err.message}`);
  }
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
