// eslint-disable-next-line import/no-unresolved
import createDomElement from './createDomElement';

export default () => {
  const modalContent = createDomElement('div', 'modal-container', [
    createDomElement('div', 'modal-container__title', 'Certificate'),
    createDomElement(
      'img',
      'modal-container__image',
      null,
      null,
      ['src', './assets/img/certificate.png'],
      ['alt', 'certificate'],
    ),
    createDomElement('div', 'modal__description', [
      createDomElement(
        'a',
        'modal-container__link',
        'Link to certificate',
        null,
        [
          'href',
          'https://drive.google.com/file/d/1RYwG4o2kOoQM0dkm1m3x85nSstHelYw9/view',
        ],
        ['target', '_blank'],
      ),
    ]),
    createDomElement('button', 'modal-container__close-btn', [
      createDomElement('i', 'material-icons', 'close'),
    ]),
  ]);
  return modalContent;
};
