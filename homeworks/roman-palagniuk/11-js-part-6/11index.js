function createTable() {
  const myTableDiv = document.querySelector('.container');
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  for (let i = 0; i < 30; i += 1) {
    const tr = document.createElement('tr');
    tr.classList.add('row');
    tableBody.appendChild(tr);

    for (let j = 0; j < 20; j += 1) {
      const td = document.createElement('td');
      td.classList.add('col');
      td.dataset.x = `${j + 1}`;
      td.dataset.y = `${i + 1}`;
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);

  function handler1(e) {
    e.target.classList.add('selectedCell');
    e.target.appendChild(
      document.createTextNode(
        `x: ${e.target.dataset.x}, y: ${e.target.dataset.y}`,
      ),
    );
    e.target.parentElement.classList.add('selectedParent');
    const tds = document.querySelectorAll('[data-y]');
    console.log(e.target);
    const colm = Array.from(tds).filter(
      (el) => el.dataset.x === e.target.dataset.x,
    );
    const arr = colm.filter((el) => el.classList[1] !== e.target.classList[1]);
    arr.forEach((el) => el.classList.add('selectedParent'));
  }

  myTableDiv.addEventListener('click', handler1);
}

createTable();
