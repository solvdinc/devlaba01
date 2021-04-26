function makeGrid(row, column) {
    const grid = document.querySelector('.grid');
    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
            let div = document.createElement("div");
            div.className = "grid__item";
            div.id = ("").concat(i,"/", j);
            grid.appendChild(div);
        }
    }

    const gridItems = grid.querySelectorAll('.grid__item');


    function changeColor(event) {
        if (!event.shiftKey) {
            gridItems.forEach((item) => {
                if (item.classList.contains('_active')) {
                    item.classList.remove('_active');
                    item.innerText = '';
                }
            });
        }
        event.target.classList.add('_active');
        event.target.innerText = `${event.target.id}`;
    }
    grid.addEventListener('click', changeColor);
}

makeGrid(30, 20);