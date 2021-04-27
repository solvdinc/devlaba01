function showUsers(users) {
  const usersList = users.results;
  const usersContent = document.querySelector('.users__content');

  usersList.forEach((user) => {
    const userBlock = document.createElement('div');
    userBlock.classList.add('users__item');

    userBlock.innerHTML = `
      <img class="users__item-img" src='${user.picture.large}' alt="">
      <div class="users__item-name">
        <span>${user.name.first}</span>
        <span>${user.name.last}</span>
      </div>
    `;

    usersContent.append(userBlock);
  });
}

function errorHandler(err) {
  const errBlock = document.createElement('p');
  const usersContent = document.querySelector('.users__content');
  errBlock.innerText = err;
  usersContent.append(errBlock);
}

function removeLoader() {
  const loader = document.querySelector('.loader');
  document.body.classList.remove('overflow');
  loader.remove();
}

// FETCH SOLUTION =====
async function getData(url, cb) {
  let data = await fetch(url);

  if (data.ok) {
    data = await data.json();
    cb(data);
    removeLoader();
  } else {
    errorHandler('Smth went wrog, try to check URL');
    removeLoader();
  }
}

// XMLHTTPREQUEST SOLUTION =====
// function getData(url, cb) {
//   const req = new XMLHttpRequest();
//   req.open('GET', url);
//   req.send();
//   req.onload = () => {
//     if (req.status === 200) {
//       const data = JSON.parse(req.response);
//       cb(data);
//       removeLoader();
//     } else {
//       errorHandler('Smth went wrog, try to check URL');
//       removeLoader();
//     }
//   };
// }

getData('https://randomuser.me/api/?gender=female&results=200', showUsers);