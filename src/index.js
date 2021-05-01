import './style.css';
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

// fetch

const drinksList = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((drinks) => {
    for (let i = 0; i < drinks.length; i++) {
      drinksList.appendChild(Drink(drinks[i]));
    }
  });
