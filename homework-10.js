import { productsData } from './product-file.js';

function getCardsCount() {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const count = parseInt(input, 10);


  if (count >= 1 && count <= 5) {
    return count;
  }

  else if (input === null) {
    return null;
  }

}

function renderCards(cardsArray) {
  const container = document.getElementById('cards-container');
  const template = document.getElementById('card-template');

  container.innerHTML = '';

  cardsArray.forEach(product => {
    const cardClone = template.content.cloneNode(true);


    const imgElement = cardClone.querySelector('.card__image');
    imgElement.src = product.image;
    imgElement.alt = product.name;


    cardClone.querySelector('.card__skin-type').textContent = product.skinType;
    cardClone.querySelector('.card__product-name').textContent = product.name;
    cardClone.querySelector('.card__main-text-effect').textContent = product.effect;
    cardClone.querySelector('.product__price').textContent = product.price;


    const listContainer = cardClone.querySelector('.card__main-text-composition-list');
    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listContainer.appendChild(li);
    });

    container.appendChild(cardClone);
  });
}

const cardsToDisplayCount = getCardsCount();

const slicedProducts = productsData.slice(0, cardsToDisplayCount);

renderCards(slicedProducts);



const productsObject = productsData.reduce((accumulator, product) => {
  accumulator[product.name] = product.effect;
  return accumulator;
}, {});

console.log(productsObject);



