const url = "https://randomuser.me/api/?results=12";

function getFullName(name) {
    return `${name.title} ${name.firstName} ${name.lastName}`;
}

function getLocation(location) {
    return `${location.country}. ${location.city}`;
}

function createUser(user) {
    return `<div class="user" data-user-id ="${user.id.value}">
    <img src="${user.picture.large}" alt="user photo" class="user__photo">
    <div class="user__name">${getFullName(user.name)}</div>
    <div class="user__location">${getLocation(user.location)}</div>
    </div>`
}

async function getUsersLstFetch(cb) {
    const response = await fetch(url);
    const data = await response.json();
    return cb(data.results);
}

function getUsersLstXMLHttpRequest(cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    let data;
    xhr.onload = function () {
        if (xhr.status === 200) {
            cb(JSON.parse(xhr.response).results);
        }
    }
}

async function displayUsers(usersLst) {
    const usersStr = usersLst.reduce((acc, user) => {
        return acc.concat(createUser(user));
    }, "");

    let userContainerElement = document.querySelector('.users-container');
    userContainerElement.innerHTML = usersStr;
}

//getUsersLstXMLHttpRequest(displayUsers);
getUsersLstFetch(displayUsers);