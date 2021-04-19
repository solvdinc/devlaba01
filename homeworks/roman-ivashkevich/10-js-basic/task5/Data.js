export default async function getData(gender, count) {
  const URL = 'https://randomuser.me/';
  const response = await fetch(`${URL}api/?gender=${gender}&results=${count}`);
  return response.json();
}
