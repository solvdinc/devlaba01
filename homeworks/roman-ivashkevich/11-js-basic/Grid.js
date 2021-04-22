import createDOMElement from './createDOMElement.js';

export default class Grid {
  constructor(cells, cols) {
    this.cells = cells;
    this.cols = cols;
    this.activeCells = [];
    this.field = [];
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
    this.field = [...document.querySelectorAll('.grid-item')];
    const { target, shiftKey } = event;

    if (shiftKey) {
      this.removeActiveCells();
      this.field.map((grid, index) => {
        if (index < this.field.indexOf(target)) {
          grid.classList.toggle('_active');
          grid.innerHTML = `x:${grid.dataset.x} y:${grid.dataset.y}`;
        }
      });
    }

    if (target.closest('.grid-item')) {
      target.classList.toggle('_active');
      target.innerHTML = `x:${target.dataset.x} y:${target.dataset.y}`;
    }
  };

  removeActiveCells() {
    this.activeCells = [...document.querySelectorAll('._active')];
    this.activeCells.map((cell) => cell.classList.remove('_active'));
  }
}
