import data from '../main/menu.json';
// console.log(data);
import menuTemplate from '../templates/menuTemplate.hbs';
// console.log(menuTemplate(data));
const template = menuTemplate(data);
// console.log(template);

const ul = document.querySelector('.js-menu');
// console.log(ul);
ul.insertAdjacentHTML('afterbegin', template);
