import createDOMElement from './createDOMElement.js';

export default class Grid {
  constructor(cells, cols) {
    this.cells = cells;
    this.cols = cols;
    this.activeCells;
    this.field = [];
    this.activeCells;
    this.isActive = false;
  }

  createGrid() {
    const wrapper = createDOMElement('div', 'wrapper', null, document.body);

    const gridContainer = createDOMElement('div', 'grid', null, wrapper);

    for (let i = 0; i < this.cells; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        createDOMElement(
          'div',
          'grid-item',
          null,
          gridContainer,
          ['data-x', `${i}`],
          ['data-y', `${j}`],
          ['data-active', false],
        );
      }
    }
    this.setListeners();
  }

  setListeners() {
    const grid = document.querySelector('.grid');

    grid.addEventListener('click', this.handleCell);
  }

  handleCell = (event) => {
    const { target, shiftKey } = event;

    if (target.dataset.active === 'true') {
      target.classList.remove('_active');
      target.innerHTML = '';
      target.dataset.active = false;
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
  };

  makeHighlight(x, y) {
    this.field = [...document.querySelectorAll('.grid-item')];

    this.field.map((cell) => {
      if (cell.dataset.x === x || cell.dataset.y === y) {
        cell.classList.add('_highlight');
        if (cell.dataset.active === 'true') {
          cell.classList.remove('_highlight');
        }
      }
    });
  }

  removeActiveCells() {
    const activeCells = [...document.querySelectorAll('._active')];
    activeCells.map((cell) => {
      cell.classList.remove('_active');
      cell.innerHTML = '';
      cell.dataset.active = false;
    });
  }

  removeHighlightCells(x, y) {
    const highLightCells = [...document.querySelectorAll('._highlight')];
    highLightCells.map((cell) => {
      if ((x, y)) {
        if (cell.dataset.x === x || cell.dataset.y === y) {
          cell.classList.remove('_highlight');
        }
      } else {
        cell.classList.remove('_highlight');
      }
    });
  }

  checkForHighlight() {
    const activeCells = [...document.querySelectorAll('._active')];
    activeCells.map((cell) => {
      this.makeHighlight(cell.dataset.x, cell.dataset.y);
    });
  }
}
