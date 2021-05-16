import '../styles/additional.scss';

const modalText = document.querySelector('.modal__text');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

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

openModalBtn.addEventListener('click', modalToggler);
closeModalBtn.addEventListener('click', modalToggler);
openModalBtn.addEventListener('click', loadData, { once: true });
