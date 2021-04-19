// const textElement = document.getElementById('text');

// const element = document.createElement('DiV');

// element.innerText = 'hello world!';

// console.log(element);

// textElement.remove();

// console.log(document.getElementById('text'));
// console.log(document.querySelector('[data-unique-id="2"]'));
// console.log();
// window.asd = document.querySelectorAll('[data-unique-id]');

// window.asd = document.getElementsByTagName('div');

// const textElement = document.getElementById('text');

// if (textElement.matches('p.hello-world[data-unique-id="2"]')) {
//   console.log('I\'m a p');
// }

// SIZES AND SCROLL

// const app = document.querySelector('.app');

// console.log({
//   // offsetWidth: app.offsetWidth,
//   // clientWidth: app.clientWidth,
//   // scrollWidth: app.scrollWidth,

//   offsetHeight: app.offsetHeight,
//   clientHeight: app.clientHeight,
//   scrollHeight: app.scrollHeight,
// });

// const height = (element) => Math.max(
//   element.offsetHeight,
//   element.clientHeight,
//   element.scrollHeight,
// );

// const app = document.querySelector('.app');

// setTimeout(() => {
//   app.scrollTop = 200;
//   app.scrollLeft = 200;
// }, 1500);

const tooltips = document.querySelectorAll('[data-tooltip]');
const calculateTooltipPosition = (element) => {
  let currentParent = element;
  let left = 0;
  let top = 0;

  while (currentParent) {
    left += currentParent.offsetLeft;
    top += currentParent.offsetTop;
    currentParent = currentParent.offsetParent;
  }

  return { left, top };
};
const openTooltip = ({ currentTarget }) => {
  const tooltipMessage = currentTarget.dataset.tooltip;

  const tooltipElement = document.createElement('div');

  tooltipElement.classList.add('tooltip');
  tooltipElement.innerText = tooltipMessage;

  const { left, top } = calculateTooltipPosition(currentTarget);
  const halfOfTarget = currentTarget.offsetWidth / 2;

  tooltipElement.style.left = `${halfOfTarget + left}px`;
  tooltipElement.style.top = `${top}px`;

  document.body.append(tooltipElement);

  requestAnimationFrame(() => tooltipElement.classList.add('_opened'));

  const closeTooltip = ({ target }) => {
    console.log(1, target, target.closest('[data-tooltip]'));
    if (
      target === currentTarget
      && !target.parentElement.closest('[data-tooltip]')
    ) {
      console.log(2);
      tooltipElement.remove();
      currentTarget.removeEventListener('mouseout', closeTooltip);
      currentTarget.addEventListener('mouseover', openTooltip);
    }
  };

  currentTarget.removeEventListener('mouseover', openTooltip);
  currentTarget.addEventListener('mouseout', closeTooltip);
};

tooltips.forEach((tooltip) => tooltip.addEventListener('mouseover', openTooltip));
