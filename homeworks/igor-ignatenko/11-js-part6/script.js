
const gridder = document.querySelector('.gridder');
const colomns = 20;
const rows = 30;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colomns; j++) {
        const el = document.createElement('div');
        el.classList.add('grid-item');
        el.dataset.colomn = j;
        el.dataset.row = i;
        gridder.append(el);
    }
}

gridder.addEventListener('click', onClickEl);

function onClickEl(event) {
    const { target, shiftKey } = event;

    if (target.dataset.row && target.dataset.colomn) {

        if (!shiftKey) {
            cleaning();
        }

        target.classList.add('_active-el');
        target.textContent = `x:${target.dataset.row}, y:${target.dataset.colomn}`;

        const activeRow = document.querySelectorAll(`[data-row = '${target.dataset.row}']`);
        const activeColomn = document.querySelectorAll(`[data-colomn = '${target.dataset.colomn}']`);

        activeRow.forEach(el => { if (el !== target) el.classList.add('_active-row') });
        activeColomn.forEach(el => { if (el !== target) el.classList.add('_active-colomn') });

        function cleaning() {
            const activeCell = document.querySelectorAll('._active-el');
            activeCell.forEach(el => {
                el.classList.remove('_active-el');
                el.textContent = '';
            })
            const delActiveRow = document.querySelectorAll('._active-row');
            const delActiveColomn = document.querySelectorAll('._active-colomn');
            delActiveRow.forEach(el => { el.classList.remove('_active-row') });
            delActiveColomn.forEach(el => { el.classList.remove('_active-colomn') });

        }
    }
}