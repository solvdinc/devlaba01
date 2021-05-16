import "../scss/additional.scss";
const modal = document.getElementById("modal");

const btn = document.getElementById("modal__open");

const close = document.getElementsByClassName("close")[0];

btn.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
btn.addEventListener('click', loadData, { once: true });


function loadData() {
  import('./modal').then(module => {
    const print = module.default;
    print();
  });
};

function toggleModal() {
  modal.classList.toggle("block");
}
