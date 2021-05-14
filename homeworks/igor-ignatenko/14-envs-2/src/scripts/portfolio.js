import '../styles/portf.scss'
import '../images/1.jpg';
import '../images/2.jpg';
import '../images/3.jpg';
import '../images/4.jpg';
import '../images/5.jpg';
import '../images/6.jpg';
import '../images/7.jpg';
import '../images/8.jpg';
import '../images/9.jpg';

const modalButton = document.querySelector('.wave-btn');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalTexts = document.querySelectorAll('.modal-box__text');
const modalText = document.querySelector('.modal-box__text');

function handler() {
    modalWindow.classList.toggle('modal_active');

}

function loadData() {
    import('./modal').then(data => {
        const loadedData = data.default;
        insertModalData(loadedData());
    })
}

function insertModalData(data) {
    modalTexts.forEach(el => el.textContent = data.text);
    const img = document.createElement('img');
    img.src = data.picture;
    modalText.appendChild(img)
}

modalClose.addEventListener('click', handler);
modalButton.addEventListener('click', handler);
modalButton.addEventListener('click', loadData, { once: true });