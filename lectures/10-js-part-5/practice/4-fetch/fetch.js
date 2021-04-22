const url = 'https://book-bag-strapi-t6xqz.ondigitalocean.app/players';

// GET
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// POST
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     first_name: 'Tolik',
//     last_name: 'Anabolik',
//     email: 'ta@gmail.com',
//     club: 'Power',
//   }),
// };

// fetch(url, options)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// DELETE
// const options = {
//   method: 'DELETE',
// };

// fetch(`${url}/4`, options)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
