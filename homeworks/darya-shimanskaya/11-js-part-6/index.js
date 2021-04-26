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
let rowArr;
let colArr;
const cells = [...grid.children];

const clickedCell = ({ target }) => {
  cells.forEach(() => {
    target.style.background = '#0b5ed7';
    target.innerHTML = `r:${target.dataset.row}\n c:${target.dataset.column}`;
  });
  const unclickedCell = () => {
    target.style.background = '';
    target.innerHTML = '';
    target.removeEventListener('mouseout', unclickedCell);
    target.addEventListener('mouseover', clickedCell);
  };
  target.removeEventListener('mouseover', clickedCell);
  target.addEventListener('mouseout', unclickedCell);
};

const mouseoverCell = ({ target }) => {
  rowArr = cells.filter((cell) => cell.dataset.row === target.dataset.row);
  colArr = cells.filter((cell) => cell.dataset.column === target.dataset.column);
  for (let i = 0; i < rowArr.length; i += 1) rowArr[i].classList.add('_hover');
  for (let i = 0; i < colArr.length; i += 1) colArr[i].classList.add('_hover');
};

const mouseoutCell = () => {
  for (let i = 0; i < rowArr.length; i += 1) rowArr[i].classList.remove('_hover');
  for (let i = 0; i < colArr.length; i += 1) colArr[i].classList.remove('_hover');
};

cells.forEach((cell) => cell.addEventListener('click', clickedCell));
cells.forEach((cell) => cell.addEventListener('mouseover', mouseoverCell));
cells.forEach((cell) => cell.addEventListener('mouseout', mouseoutCell));
