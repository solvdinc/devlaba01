// Task 5 Fetch API/XMLHttpRequest

const URL = 'https://randomuser.me/api/?gender=female&results=20';

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
async function getUsersXmlHttpRequest(cb) {
	const XMLHR = new XMLHttpRequest();

	try {
		XMLHR.open('GET', URL);
		XMLHR.send();
		XMLHR.onload = () => {
			const response = JSON.parse(XMLHR.response);
			cb(response.results);
		};

		return XMLHR;
	} catch (error) {
		console.error('Smth went wrong, try to check URL');
	}
};

getUsersXmlHttpRequest(createCards);