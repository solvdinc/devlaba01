const getPhotos = async () => {
  const URL = 'https://tinyfac.es/api/users';
  const response = await fetch(URL);
  return response.json();
};

export default getPhotos;
