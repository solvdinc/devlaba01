const rows = 30;
const cols = 20;
const itemsCount = rows * cols;
const fieldContent = document.querySelector('.field__inner');

// MAKE CELLS
for (let i = 0; i < itemsCount; i += 1) {
  const fieldItem = document.createElement('div');
  fieldItem.classList.add('field__item');
  fieldContent.append(fieldItem);
}

const fieldItems = [...document.querySelectorAll('.field__item')];
fieldContent.addEventListener('click', fieldHandler);

function fieldHandler(event) {
  if (!event.target.closest('.field__item')) {
    return;
  }

  // CHECK SHIFT KEY
  if (!event.shiftKey) {
    delActiveFields();
  }

  // FIND CELL, ROW AND COL
  const fieldNum = fieldItems.indexOf((event.target)) + 1;
  const rowNum = Math.ceil(fieldNum / cols);
  const colNum = (fieldNum - rowNum * cols) + cols;

  // START AND END OF CURRENT ROW
  const rowEndIndex = rowNum * cols;
  const rowStartIndex = rowEndIndex - cols;

  // ADD ACTIVE CELL AND SHOW COORDS
  fieldItems[fieldNum - 1].classList.add('_active-field');
  fieldItems[fieldNum - 1].innerHTML = `<small>x: ${colNum} / y: ${rowNum}</small>`;

  // MARK ACTIVE ROW
  for (let i = rowStartIndex; i < rowEndIndex; i += 1) {
    fieldItems[i].classList.add('_active-row');
  }

  // MARK ACTIVE COL
  for (let i = 0; i < rows; i += 1) {
    fieldItems[colNum + (i * cols - 1)].classList.add('_active-row');
  }
}

// DELETE ACTIVE COLS, ROWS AND CELL
function delActiveFields() {
  const activeFields = document.querySelectorAll('._active-field');
  const activeRows = document.querySelectorAll('._active-row');

  classRemove(activeFields, '_active-field');
  classRemove(activeRows, '_active-row');
}

function classRemove(arr, cls) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].classList.remove(cls);
    arr[i].innerHTML = '';
  }
}
