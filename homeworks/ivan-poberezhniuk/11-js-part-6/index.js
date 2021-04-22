/* eslint-disable no-undef */
const container = document.querySelector('.container');
const rows = 30;
const columns = 20;

let table = new Array(rows).fill(new Array(columns).fill(0));
let activeCells = [];

table = table.map((row, rowIndex) =>
  row.map((column, columnINdex) => {
    const div = document.createElement('div');

    div.classList.add('container__item');
    div.dataset.row = rowIndex;
    div.dataset.column = columnINdex;

    return div;
  })
);

table.forEach((row) => container.append(...row));

const onCellClick = (event) => {
  const { target, shiftKey } = event;
  const { row, column } = target.dataset;

  if (shiftKey) {
    activeCells.push({ row, column });

    target.textContent = `x: ${column}, y: ${row}`;
    target.classList.toggle('_active');
  } else {
    if (activeCells.length) {
      const prevActiveCell = table[activeCells[0].row][activeCells[0].column];

      prevActiveCell.classList.remove('_active');
      prevActiveCell.textContent = ``;
    }

    activeCells.forEach((activeCell) => {
      const prevActiveCell = table[activeCell.row][activeCell.column];
      prevActiveCell.classList.remove('_active');
      prevActiveCell.textContent = ``;
    });

    activeCells = [];
    activeCells.push({ row, column });

    target.textContent = `x: ${column}, y: ${row}`;
    target.classList.toggle('_active');
  }
};

const onCellOver = (event) => {
  const { target } = event;
  const { row, column } = target.dataset;

  table.forEach((tableRow) => tableRow[column].classList.add('_hover'));
  table[row].forEach((cell) => cell.classList.add('_hover'));
};

const onCellOut = (event) => {
  const { target } = event;
  const { row, column } = target.dataset;

  table.forEach((tableRow) => tableRow[column].classList.remove('_hover'));
  table[row].forEach((cell) => cell.classList.remove('_hover'));
};

container.addEventListener('click', onCellClick);
container.addEventListener('mouseover', onCellOver);
container.addEventListener('mouseout', onCellOut);
