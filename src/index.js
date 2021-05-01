import './style.css';

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

let ordered = true;

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
orderBtnElm.addEventListener('click', () => {
  orderBtnElm.textContent = 'Zrušit';
  drinkCupElm.classList.add('drink__cup--selected');

  if (ordered === true) {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  } else if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  }
});
