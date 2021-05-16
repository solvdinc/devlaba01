/* eslint-disable class-methods-use-this */
import createDOMElement from './createDOMElement.js';

export default class Grid {
  constructor(cells, cols) {
    this.cells = cells;
    this.cols = cols;
    this.field = [];
  }

  createGrid() {
    const wrapper = createDOMElement('div', 'wrapper', null, document.body);
    const gridContainer = createDOMElement('div', 'grid', null, null);
    const table = [];

    for (let i = 0; i < this.cells; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        table.push(
          createDOMElement(
            'div',
            'grid-item',
            null,
            gridContainer,
            ['data-x', `${i}`],
            ['data-y', `${j}`],
            ['data-active', false],
          ),
        );
      }
    }
    wrapper.append(gridContainer);
    this.setListeners();
  }

  setListeners() {
    const grid = document.querySelector('.grid');

    grid.addEventListener('click', (event) => this.handleCell(event));
  }

  handleCell(event) {
    const { target, shiftKey } = event;

    if (target.dataset.active === 'true') {
      this.removeActiveCells(target);
      this.removeHighlightCells(target.dataset.x, target.dataset.y);
      this.checkForHighlight();
    } else {
      if (!shiftKey) {
        this.removeActiveCells();
        this.removeHighlightCells();
      }

      if (target.dataset.active === 'false') {
        target.classList.add('_active');
        target.innerHTML = `x:${target.dataset.x} y:${target.dataset.y}`;
        target.dataset.active = true;
        this.makeHighlight(target.dataset.x, target.dataset.y);
      }
    }
  }

  makeHighlight(x, y) {
    this.field = [...document.querySelectorAll('.grid-item')];

    this.field.forEach((cell) => {
      if (cell.dataset.x === x || cell.dataset.y === y) {
        if (cell.dataset.active === 'true') {
          cell.classList.remove('_highlight');
        } else {
          cell.classList.add('_highlight');
        }
      }
    });
  }

  processingCell(cell) {
    const tempCell = cell;
    tempCell.classList.remove('_active');
    tempCell.innerHTML = '';
    tempCell.dataset.active = false;
  }

  removeActiveCells(targetCell) {
    if (!targetCell) {
      const activeCells = [...document.querySelectorAll('._active')];
      activeCells.forEach((cell) => {
        this.processingCell(cell);
      });
    } else {
      this.processingCell(targetCell);
    }
  }

  removeHighlightCells(x, y) {
    const highLightCells = [...document.querySelectorAll('._highlight')];
    highLightCells.forEach((cell) => {
      if ((x || y) && (cell.dataset.x === x || cell.dataset.y === y)) {
        cell.classList.remove('_highlight');
      } else {
        cell.classList.remove('_highlight');
      }
    });
  }

  checkForHighlight() {
    const activeCells = [...document.querySelectorAll('._active')];
    activeCells.forEach((cell) => {
      this.makeHighlight(cell.dataset.x, cell.dataset.y);
    });
  }
}
