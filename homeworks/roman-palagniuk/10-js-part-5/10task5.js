// 5

const url = 'https://randomuser.me/api/?results=5';
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const users = JSON.parse(xhr.response);
    users.results.forEach((item) => {
      const list = document.querySelector('.list1');
      list.innerHTML += `<li ><img src='${item.picture.thumbnail}'><p>${item.name.first} ${item.name.last}</p>
      </li>`;
    });
  } else if (xhr.readyState <= 4) {
    const list = document.querySelector('.list');
    list.innerHTML += 'loading...';
  } else {
    console.error('error');
  }
});

// fetch
fetch('https://randomuser.me/api/?results=5')
  .then((response) => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  })
  .then((response) => response.json())
  .then((json) => json.results.forEach((item) => {
    const list2 = document.querySelector('.list2');
    list2.innerHTML += `<li ><img src='${item.picture.thumbnail}'><p>${item.name.first} ${item.name.last}</p>
    </li>`;
  }))
  .catch((error) => console.log('error', error));
