import '../styles/additional.scss';

let modalText = document.querySelector('.modal__text');
let openModalBtn = document.querySelector('.open-modal');
let closeModalBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

openModalBtn.addEventListener('click', modalToggler);
closeModalBtn.addEventListener('click', modalToggler);
openModalBtn.addEventListener('click', loadData, { once: true });

function loadData() {
  import(/* webpackChunkName: "modal-content" */ './modal-content').then(data => {
    const loadedData = data.default;
    insertModalData(loadedData());
  });
};

function insertModalData(data) {
  modalText.textContent = data;
}

function modalToggler() {
  modal.classList.toggle('modal_active');
  overlay.classList.toggle('overlay_active');
}

