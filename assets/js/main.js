/* global document */
import Global from './global';
import sayHello from './about';

document.addEventListener('DOMContentLoaded', () => {
  const g = new Global();
  g.init();
  sayHello();
});
