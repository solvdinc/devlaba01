function handler(e) {
  e.target.classList.add('selectedCell');
  console.log(e);
  console.log(e.path[1]);
  e.path[1].classList.add('selectedParent');
  // e.target.parentNodeElement.classList.add('selectedParent');
  e.target.innerHTML = `${e.target.classList[1]}`;
  console.log(e.target);
}

const table = document.querySelector('.table');
table.addEventListener('click', handler);
