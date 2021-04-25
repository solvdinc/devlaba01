const colCount = 20;
const rowCount = 30;
const width = 40;
const height = 40;

const ROW_ACTIVE_CN = '_row-active';
const SELECTED_CN = '_selected';
const GRID_CELL_CN = 'grid__cell';

let gridCells;
const gridWrapperElement = document.querySelector('.grid__wrapper');

(function createGrid() {
    for (let i = 0; i < colCount * rowCount; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add(GRID_CELL_CN);
        gridWrapperElement.append(cell);
    }

    gridCells = document.querySelectorAll('.grid__cell');
}());

const getCellXCoord = (offsetLeft) => Math.floor((offsetLeft - gridWrapperElement.offsetLeft) / width) + 1;

const getCellYCoord = (offsetTop) => Math.floor((offsetTop - gridWrapperElement.offsetTop) / height) + 1;

function highlightRowColumn(x, y) {
    gridCells.forEach((element) => {
        if (getCellXCoord(element.offsetLeft) === x || getCellYCoord(element.offsetTop) === y) {
            element.classList.add(ROW_ACTIVE_CN);
        }
    });
}

function clearStyles() {
    gridCells.forEach((element) => {
        if (element.classList.contains(SELECTED_CN)) {
            element.classList.remove(SELECTED_CN);
            element.innerHTML = '';
        }

        if (element.classList.contains(ROW_ACTIVE_CN)) {
            element.classList.remove(ROW_ACTIVE_CN);
        }
    });
}

function selectCell(e) {
    if (!e.shiftKey) {
        clearStyles();
    }
    const x = getCellXCoord(e.target.offsetLeft);
    const y = getCellYCoord(e.target.offsetTop);

    highlightRowColumn(x, y);

    e.target.innerHTML = `${x}/${y}`;
    e.target.classList.add(SELECTED_CN);
}

gridCells.forEach((element) => {
    element.addEventListener('click', selectCell);
});