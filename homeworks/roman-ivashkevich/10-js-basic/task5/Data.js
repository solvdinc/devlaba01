// fetch
export async function getDataWithFetchMethod(gender, count) {
  const URL = 'https://randomuser.me/';
  const response = await fetch(`${URL}api/?gender=${gender}&results=${count}`);
  return response.json();
}

// XMLHttpRequest
function makeRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.status);
      }
    };

    xhr.onerror = () => {
      reject(xhr.status);
    };

    xhr.send();
  });
}

export async function getDataWithXMLHttpRequest(gender, count) {
  const URL = 'https://randomuser.me/';
  const response = await makeRequest(
    'GET',
    `${URL}api/?gender=${gender}&results=${count}`,
  );
  return JSON.parse(response);
}
