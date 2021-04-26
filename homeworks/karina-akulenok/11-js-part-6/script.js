function makeGrid(row, column) {
  const grid = document.querySelector('.grid');
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      const div = document.createElement('div');
      div.className = 'grid__item';
      div.id = ('').concat(i, '/', j);
      grid.appendChild(div);
    }
  }

  const gridItems = grid.querySelectorAll('.grid__item');

  const getX = (offsetLeft) => Math.floor((offsetLeft - grid.offsetLeft) / 40) + 1;

  const getY = (offsetTop) => Math.floor((offsetTop - grid.offsetTop) / 40) + 1;

  function highlightLines(x, y) {
    gridItems.forEach((element) => {
      if (getX(element.offsetLeft) === x || getY(element.offsetTop) === y) {
        element.classList.add('_around');
      }
    });
  }

  function changeColor(event) {
    if (!event.shiftKey) {
      gridItems.forEach((item) => {
        const theItem = item;
        if (theItem.classList.contains('_active')) {
          theItem.classList.remove('_active');
          theItem.innerText = '';
        }
      });
    }

    const x = getX(event.target.offsetLeft);
    const y = getY(event.target.offsetTop);

    highlightLines(x, y);

    event.target.classList.add('_active');
    event.target.innerText = `${event.target.id}`;
  }
  grid.addEventListener('click', changeColor);
}

makeGrid(30, 20);
