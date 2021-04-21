const url = 'https://randomuser.me/api/?gender=female&results=8';

// XMLHttpRequest

const xhr = new XMLHttpRequest();

xhr.open(
  'GET',
  url,
  true,
);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) {
    return;
  }

  if (xhr.status === 200) {
    const users = JSON.parse(xhr.responseText);
    users.results.forEach((user) => {
      const userCard = document.querySelector('.xml__user-card');
      userCard.innerHTML += `
      <div class='card'>
        <img src='${user.picture.large}' alt='photo' class='photo'>
        <p class='name'>${user.name.title} ${user.name.first} ${user.name.last}</p>
      </div>
      `;
    });
  } else {
    console.log('err', xhr.responseText);
  }
};

fetch(url)
  .then((response) => response.json())
  .then((json) => json.results.forEach((user) => {
    const userCard = document.querySelector('.fetch__user-card');
    userCard.innerHTML += `
    <div class='card'>
      <img src='${user.picture.large}' alt='photo' class='photo'>
      <p class='name'>${user.name.title} ${user.name.first} ${user.name.last}</p>
    </div>
    `;
  }))
  .catch((error) => console.log(error));
