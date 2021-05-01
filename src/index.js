import './style.css';
import { Layer } from './Layer';
import { Drink } from './Drinks';

// nav functionality

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navElmAll = document.querySelectorAll('.nav-link');

for (let i = 0; i < navElmAll.length; i++) {
  navElmAll[i].addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
}

// ordered button functionality
// let ordered = true;

// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// orderBtnElm.addEventListener('click', () => {
//   orderBtnElm.textContent = 'Zrušit';
//   drinkCupElm.classList.add('drink__cup--selected');

//   if (ordered === true) {
//     orderBtnElm.textContent = 'Objednat';
//     drinkCupElm.classList.remove('drink__cup--selected');
//     ordered = false;
//   } else if (ordered === false) {
//     orderBtnElm.textContent = 'Zrušit';
//     drinkCupElm.classList.add('drink__cup--selected');
//     ordered = true;
//   }
// });

// layer component

// const drinkInfoElm = document.querySelector('.drink__info');

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// for (let i = 0; layers.length; i++) {
//   drinkInfoElm.innerHTML += Layer(layers[i]);
// }

// drink component

const drink = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const drinksList = document.querySelector('.drinks-list');
drinksList.appendChild(Drink(drink));
