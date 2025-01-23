import {CARDS_TO_SHOW, cardsData} from '../constants.js';

const cardsList = document.querySelector('.catalog__cards-list');
const showMoreBtn = document.querySelector('.btn.catalog__button--show-more');

const extraCards = cardsData.map((card) => card);

const createNewLiItem = (elTag, classText) => {
  const newItem = document.createElement(elTag);
  newItem.classList.add(classText);
  return newItem;
};

const createCard = (items) => {
  items.forEach(({availabilityMods, statusMods, image, level, name, tags, flags, likesNumber, transport}) => {
    const cardWrapperEl = document.querySelector('.catalog__cards-item .companions-card.companions-card--catalog');
    const liEl = createNewLiItem('li', 'catalog__cards-item');
    liEl.classList.add(`catalog__cards-item${availabilityMods}`);
    const cardWrapper = cardWrapperEl.cloneNode(true);
    cardWrapper.querySelector('.companions-card__content').className = 'companions-card__content';
    cardWrapper.querySelector('.companions-card__content').classList.add(`companions-card__content${statusMods}`);
    cardWrapper.querySelector('.companions-card__image img').src = `${image}-mobile.jpg`;
    cardWrapper.querySelector('.companions-card__image img').srcset = `${image}-mobile@2x.jpg`;
    cardWrapper.querySelectorAll('.companions-card__image source[data-screen-size="desktop"]').forEach((item) => {
      item.srcset = `${image}-desktop.webp, ${image}-desktop@2x.webp`;
    });
    cardWrapper.querySelectorAll('.companions-card__image source[data-screen-size="mobile"]').forEach((item) => {
      item.srcset = `${image}-mobile.webp, ${image}-mobilep@2x.webp`;
    });
    cardWrapper.querySelector('.companions-card__image img').alt = 'Изображение пользователя.';
    cardWrapper.querySelector('.companions-card__level').className = `companions-card__level companions-card__level--${level}`;
    cardWrapper.querySelector('.companions-card__level span').textContent = level;
    cardWrapper.querySelector('.companions-card__level span + span').textContent = 'level';
    cardWrapper.querySelector('.companions-card__text h3').textContent = name;
    cardWrapper.querySelector('.companions-card__text p').textContent = tags;
    cardWrapper.querySelector('.companions-card__likes-wrapper > .companions-card__like-button + span').textContent = likesNumber;
    const countriesItems = cardWrapper.querySelectorAll('.companions-card__countries-item');
    let index = 0;
    for (let i = 0; i < flags.length; i++) {
      if (i < flags.length) {
        index = i;
      }
      countriesItems[index].className = `companions-card__countries-item companions-card__countries-item--${flags[index].icon}`;
      countriesItems[index].querySelector('.companions-card__countries-icon img').src = `img/content/${flags[index].icon}.jpg`;
      countriesItems[index].querySelector('.companions-card__countries-name span').textContent = flags[index].countryName;
      countriesItems[index].querySelector('.companions-card__countries-icon img').srcset = `img/content/${flags[index].icon}@2x.jpg`;
      countriesItems[index].querySelector('.companions-card__countries-icon source').srcset = `img/content/${flags[index].icon}.webp, img/content/${flags[index].icon}@2x.webp`;
      countriesItems[index].querySelector('.companions-card__countries-icon img').alt = flags[index].alt;
    }

    const transportItems = cardWrapper.querySelectorAll('.transportation-list__item');
    for (let j = 0; j < transportItems.length; j++) {
      if (j < transport.length) {
        index = j;
      }
      transportItems[index].dataset.status = transport[index].statusAttr;
    }
    liEl.append(cardWrapper);
    cardsList.append(liEl);
  });
};

const showCards = () => {
  const cardItems = document.querySelectorAll('.catalog__cards-item');
  [...cardItems].slice(CARDS_TO_SHOW, cardItems.length).forEach((card) => {
    card.classList.add('catalog__cards-item--is-hidden');
  });
};

const disableShowMoreButton = () => {
  const hiddenCards = document.querySelectorAll('.catalog__cards-item--is-hidden');
  if (hiddenCards.length === 0) {
    showMoreBtn.setAttribute('disabled', '');
  }
};

const loadMoreCards = () => {
  disableShowMoreButton();
  const cardItems = document.querySelectorAll('.catalog__cards-item');
  showMoreBtn.addEventListener('click', (evt) => {
    const cardsHidden = document.querySelectorAll('.catalog__cards-item--is-hidden');
    evt.preventDefault();
    if (cardItems.length > CARDS_TO_SHOW) {
      [...cardsHidden].slice(0, CARDS_TO_SHOW).forEach((card) => {
        card.classList.remove('catalog__cards-item--is-hidden');
      });
    }
    disableShowMoreButton();
  });
};

export const renderCards = () => {
  if (cardsList) {
    createCard(extraCards);
    showCards();
    loadMoreCards();
  }
};
