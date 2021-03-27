let contacts = document.getElementById("contacts");
let buttonContacts = document.getElementById("button__contacts")
let button = document.getElementById("btn-top");

button.addEventListener('click', onTop);
buttonContacts.addEventListener('click', showContacts);

function onTop() {
  document.documentElement.scrollTop = 0;
}

function showContacts() {
  if (contacts.classList.contains("show")){
    contacts.classList.remove("show");
  }
  else {
    contacts.classList.add("show");
  }
}
