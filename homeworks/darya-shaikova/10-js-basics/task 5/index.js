// Task 5 Fetch API/XMLHttpRequest
const URL = 'https://randomuser.me/api/?gender=female&results=5';

function createCards(users) {
  const container = document.getElementById('container');

  users.forEach((person) => {
    const userCard = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    h2.textContent = `${person.name.last} ${person.name.first}`;
    img.src = person.picture.large;
    userCard.className = 'card';

    userCard.append(img);
    userCard.append(h2);
    container.append(userCard);
  });
};

// Fetch request
async function getUsersFetch(url, cb) {
  let response = await fetch(url);

  if (response.ok) {
    response = await response.json();
    cb(response.results);
  }
}

getUsersFetch(URL, createCards);

// XmlHttpRequest
function getUsersXmlHttpRequest(cb) {
  return new Promise((resolve, reject) => {
    const XMLHR = new XMLHttpRequest();

    XMLHR.open('GET', URL, true);
    XMLHR.send();
    XMLHR.onload = () => {
      if (XMLHR.status === 200) {
        resolve(XMLHR.response);
        const response = JSON.parse(XMLHR.response);
        cb(response.results);
      }
    }
    XMLHR.onerror = () => reject(XMLHR.status);
  });
}

getUsersXmlHttpRequest(createCards);
