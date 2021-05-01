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
  return drink;
};
