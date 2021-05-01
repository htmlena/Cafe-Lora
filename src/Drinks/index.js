import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, ordered, layers }) => {
  let html = '';
  for (let i = 0; i < layers.length; i++) {
    html += Layer(layers[i]);
  }
  const drink = document.createElement('div');
  drink.classList.add('drink');
  drink.innerHTML = `
            <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${id}.png" />
              </div>
              <div class="drink__info">
                <h3>${name}</h3>
                ${html}
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>`;

  // ordered button functionality

  const orderBtnElm = drink.querySelector('.order-btn');
  const drinkCupElm = drink.querySelector('.drink__cup');
  orderBtnElm.addEventListener('click', () => {
    //orderBtnElm.textContent = 'Zrušit';
    //drinkCupElm.classList.add('drink__cup--selected');

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

  return drink;
};
