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
