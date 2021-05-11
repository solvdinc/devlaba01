import { sayHello } from './main-2';

import './styles.scss';
import './styles-2.css';

export const A = 123;
export const B = 123;
export const C = 321;
export const D = 321;

debugger;

// sayHello('world');

console.log(process.env.VERSION);

if (process.env.NODE_ENV === 'development') {
  throw new Error(A + B);
  // console.log('debug your code', A, B, C);
}
