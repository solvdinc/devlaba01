const body = document.getElementsByTagName("body")[0];
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
const rowLength = 30;
const cellLength = 20;

for (let i = 1; i <= rowLength; i++) {
  const row = document.createElement("tr");

  for (let j = 1; j <= cellLength; j++) {
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
  if (!event.target.closest("td")) {
    return;
  }
  if (!event.shiftKey) {
    clearRowCell();
  }

  const targetTd = event.target.closest("td");
  const activeCell = document.querySelectorAll(
    `[data-y = '${targetTd.dataset.y}']`
  );
  const activeRow = document.querySelectorAll(
    `[data-x = '${targetTd.dataset.x}']`
  );

  targetTd.classList.add("highlight");
  targetTd.textContent = `x: ${targetTd.dataset.x}, y: ${targetTd.dataset.y}`;

  activeCell.forEach((el) => {
    if (el !== targetTd) el.classList.add("highlightRowCell");
  });
  activeRow.forEach((el) => {
    if (el !== targetTd) el.classList.add("highlightRowCell");
  });
}
function clearRowCell() {
  let activeTargetTd = document.querySelector(".highlight");
  let activeRows = document.querySelectorAll(".highlightRowCell");

  if (activeTargetTd) {
    activeTargetTd.classList.remove("highlight");
    activeTargetTd.textContent = "";
  }

  for (let i = 0; i < activeRows.length; i++) {
    activeRows[i].classList.remove("highlightRowCell");
  }
}
tblBody.addEventListener("click", highlightRowCell);
