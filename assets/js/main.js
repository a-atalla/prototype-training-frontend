/* global document */
import $ from 'jquery';
import 'bootstrap';
import Global from './global';
import sayHello from './about';

window.$ = $;
window.jQuery = $;
document.addEventListener('DOMContentLoaded', () => {
  const g = new Global();
  g.init();
  sayHello();
});
