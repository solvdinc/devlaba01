console.log('hello')

const gridder = document.querySelector('.gridder');
const colomns = 20;
const rows = 30;
const arrActive = [];

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
        target.classList.toggle('_active-el');
        target.textContent = `x:${target.dataset.row}, y:${target.dataset.colomn}`;

        const activeRow = document.querySelectorAll(`[data-row = '${target.dataset.row}']`);
        const activeColomn = document.querySelectorAll(`[data-colomn = '${target.dataset.colomn}']`);

        activeRow.forEach(el => { if (el !== target) el.classList.add('_active-row') });
        activeColomn.forEach(el => { if (el !== target) el.classList.add('_active-colomn') });

        arrActive.push(target)
        if (arrActive.length > 1) {
            let prevValue = arrActive[0];
            prevValue.textContent = '';
            prevValue.classList.toggle('_active-el');

            if (target.dataset.colomn === prevValue.dataset.colomn
                && target.dataset.row === prevValue.dataset.row) {
                prevValue.textContent = `x:${prevValue.dataset.row}, y:${prevValue.dataset.colomn}`;
            }

            if (target.dataset.row !== prevValue.dataset.row) {
                document.querySelectorAll(`[data-row = '${prevValue.dataset.row}']`).forEach(el => el.classList.remove('_active-row'));
            }
            if (target.dataset.colomn !== prevValue.dataset.colomn) {
                document.querySelectorAll(`[data-colomn = '${prevValue.dataset.colomn}']`).forEach(el => el.classList.remove('_active-colomn'));
            }

            arrActive.splice(0, 1);

        }
    }
}