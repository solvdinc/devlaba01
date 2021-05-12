/**
 * @param {String} el
 * @param {String} classNames
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param {...array} dataAttr
 */

// dataAttr = ['name', 'value'] || ['name', ''];
export default function createDOMElement(
  el,
  className,
  child,
  parent,
  ...dataAttr
) {
  let element = null;

  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }
  // если у нас уже есть класс для элемента, то следующий будет записан через пробел
  if (className) element.classList.add(...className.split(' '));

  if (child && Array.isArray(child)) {
    child.forEach(
      (childElement) => childElement && element.appendChild(childElement),
    );
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        // например атрибут disable
        element.setAttribute(attrName, '');
      }
      if (attrName.match(/src|draggable|/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}
