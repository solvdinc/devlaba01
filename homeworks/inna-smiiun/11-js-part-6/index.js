const content = document.querySelector('.content');

(function initialization() {
    const columns = 20;
    const rows = 30;
    for (let i = 0; i < rows * columns; i += 1) {
        const block = document.createElement('div');
        block.classList.add('block');
        content.appendChild(block);
    }
}());

let blocks = document.querySelectorAll('.block');

const getX = (offsetLeft) => Math.floor((offsetLeft - content.offsetLeft) / 40) + 1;
const getY = (offsetTop) => Math.floor((offsetTop - content.offsetTop) / 40) + 1;

function highlightLines(x, y) {
    blocks.forEach((item) => {
        if (getX(item.offsetLeft) === x || getY(item.offsetTop) === y) {
            fieldCreation(item);
        }
    });
}

function fieldCreation(block) {
    block.classList.add('block_lines');
}

function clearStyles() {
    blocks.forEach((item) => {
        item.classList.remove('block_selected');
        item.innerText = '';
        item.classList.remove('block_lines');
    });
}

content.onclick = function (event) {
    if (!event.shiftKey) {
        clearStyles();
    }
    const x = getX(event.target.offsetLeft);
    const y = getY(event.target.offsetTop);

    highlightLines(x, y);

    event.target.innerText = `X:${x}\nY:${y}`;
    event.target.classList.add('block_selected');
};
