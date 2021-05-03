
const gridder = document.querySelector('.gridder');
const columns = 20;
const rows = 30;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const el = document.createElement('div');
        el.classList.add('grid-item');
        el.dataset.column = j;
        el.dataset.row = i;
        gridder.append(el);
    }
}

gridder.addEventListener('click', onClickEl);

function onClickEl(event) {
    const { target, shiftKey } = event;

    if (target.dataset.row && target.dataset.column) {

        if (!shiftKey) {
            cleaning();
        }

        target.classList.add('_active-el');
        target.textContent = `x:${target.dataset.row}, y:${target.dataset.column}`;

        const activeRow = document.querySelectorAll(`[data-row = '${target.dataset.row}']`);
        const activeColumn = document.querySelectorAll(`[data-column = '${target.dataset.column}']`);

        activeRow.forEach(el => { if (el !== target) el.classList.add('_active-row') });
        activeColumn.forEach(el => { if (el !== target) el.classList.add('_active-column') });

    }
}

function cleaning() {
    const activeCell = document.querySelectorAll('._active-el');
    activeCell.forEach(el => {
        el.classList.remove('_active-el');
        el.textContent = '';
    })
    const delActiveRow = document.querySelectorAll('._active-row');
    const delActiveColumn = document.querySelectorAll('._active-column');
    
    delActiveRow.forEach(el => { el.classList.remove('_active-row') });
    delActiveColumn.forEach(el => { el.classList.remove('_active-column') });

}