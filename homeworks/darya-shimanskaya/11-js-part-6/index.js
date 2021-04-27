const grid = document.querySelector('.grid');

for (let i = 0; i < 30; i += 1) {
  for (let j = 0; j < 20; j += 1) {
    const div = document.createElement('div');
    div.classList.add('grid__cell');
    div.dataset.row = i + 1;
    div.dataset.column = j + 1;
    grid.append(div);
  }
}

const cells = [...grid.children];

const clickedCell = ({ target }) => {
  if (!target.shiftKey) {
    cells.forEach((cell) => {
      const currentCell = cell;
      if (cell.style.background) {
        currentCell.style.background = '';
        currentCell.innerText = '';
      }
    });
    target.style.background = '#0b5ed7';
    target.innerText = `r:${target.dataset.row}\nc:${target.dataset.column}`;
  }
};

const mouseoverCell = ({ target }) => {
  cells.forEach((cell) => {
    if (cell.dataset.row === target.dataset.row || cell.dataset.column === target.dataset.column) {
      cell.classList.add('_hover');
    }
  });
};

const mouseoutCell = () => {
  cells.forEach((cell) => {
    cell.classList.remove('_hover');
  });
};

grid.addEventListener('click', clickedCell);
grid.addEventListener('mouseover', mouseoverCell);
grid.addEventListener('mouseout', mouseoutCell);
