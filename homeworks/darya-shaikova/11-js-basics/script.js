const grid = document.querySelector('.grid');
const columnsCount = 20;
const rowsCount = 30;
const cellsCount = columnsCount * rowsCount;

for (let i = 0; i < cellsCount; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('grid__cell');
  grid.append(cell);
}

const gridCells = document.querySelectorAll('.grid__cell');

const getX = (offsetLeft) => Math.floor((offsetLeft - grid.offsetLeft) / 40) + 1;

const getY = (offsetTop) => Math.floor((offsetTop - grid.offsetTop) / 40) + 1;

function highlightLines(x, y) {
  gridCells.forEach((element) => {
    if (getX(element.offsetLeft) === x || getY(element.offsetTop) === y) {
      element.classList.add('_line-active');
    }
  });
}

function clearStyles() {
  gridCells.forEach((element) => {
    if (element.classList.contains('_selected')) {
      element.classList.remove('_selected');
      element.innerHTML = '';
    }

    if (element.classList.contains('_line-active')) {
      element.classList.remove('_line-active');
    }
  });
}


function selectCell(event) {
  if (event.target.classList.contains('_selected')) {
    clearStyles();
  } else {
    if (!event.shiftKey) {
      clearStyles();
    }

    const x = getX(event.target.offsetLeft);
    const y = getY(event.target.offsetTop);

    highlightLines(x, y);

    event.target.innerText = `x:${x}\ny:${y}`;
    event.target.classList.add('_selected');
  }
}

grid.addEventListener('click', selectCell)


