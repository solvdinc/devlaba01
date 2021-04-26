const body = document.getElementsByTagName("body")[0];
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");

for (let i = 1; i <= 30; i++) {
  const row = document.createElement("tr");

  for (let j = 1; j <= 20; j++) {
    const cell = document.createElement("td");
    cell.dataset.x = j;
    cell.dataset.y = i;
    row.appendChild(cell);
  }

  tblBody.appendChild(row);
}

tbl.appendChild(tblBody);
body.appendChild(tbl);

function highlightRowCell(event) {
  const td = event.target.closest("td");

  td.appendChild(
    document.createTextNode(`x: ${td.dataset.x}, y: ${td.dataset.y}`)
  );
  td.parentElement.classList.add("highlightRowCell");

  const activeRow = document.querySelectorAll(`[data-x = '${td.dataset.x}']`);
  activeRow.forEach((el) => {
    if (el !== td) el.classList.add("highlightRowCell");
  });
  highlight(td);
}

function highlight(td) {
  let selectedTd;
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight");
}
tblBody.addEventListener("click", highlightRowCell);
