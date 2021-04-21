const URL = 'https://randomuser.me/api/?gender=female&results=4';

function createUserCard(user, selector) {
  const userCard = document.createElement('div');
  userCard.classList.add('user');
  userCard.innerHTML = `
    <img class="user__image" src='${user.picture.large}' alt="user image">
    <div class="user__name">
      <p>${user.name.first} ${user.name.last}</p>
    </div>`;
  document.querySelector(selector).append(userCard);
}

function randomUsersFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => json.results.forEach((user) => {
      createUserCard(user, '.fetch__user-card');
    }));
}

randomUsersFetch(URL);

function randomUsersXml(url) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function load() {
    if (xhr.status === 200) {
      const responseXhr = xhr.response.results;
      responseXhr.forEach((user) => {
        createUserCard(user, '.xml__user-card');
      });
    }
  };
}

randomUsersXml(URL);
