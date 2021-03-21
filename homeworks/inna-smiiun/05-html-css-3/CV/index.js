window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let button = document.getElementById("btn-top");
  if (window.screen.width < 600 && document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function onTop() {
  document.documentElement.scrollTop = 0;
}
function showContacts() {
  let contacts = document.getElementById("contacts");
  if (contacts.style.display === "block") {
    contacts.style.display = "none";
  } else {
    contacts.style.display = "block";
  }
}
