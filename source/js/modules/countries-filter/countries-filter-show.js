import {setNewStyles} from './filter-button-position';

const filters = document.querySelector('.filters__options-wrapper');
const showListBtn = document.querySelector('.btn.filters__options-button');
const hideListBtn = document.querySelector('.btn.filters__button');
const showListBtnMobile = document.querySelector('.filters__options-wrapper p');
const breakpointMobile = window.matchMedia('(max-width:767px)');

const openList = (button) => {
  const toggleText = showListBtn.querySelector('.filters__options-button-text');
  button.addEventListener('click', () => {
    if (filters.classList.contains('filters__options-wrapper--list-is-hidden')) {
      filters.classList.remove('filters__options-wrapper--list-is-hidden');
      toggleText.textContent = 'Свернуть';
      setNewStyles();
    } else {
      filters.classList.add('filters__options-wrapper--list-is-hidden');
      toggleText.textContent = 'Показать все';
    }
    if (!filters.classList.contains('filters__options-wrapper--list-is-hidden')) {
      hideListBtn.addEventListener('click', () => {
        filters.classList.add('filters__options-wrapper--list-is-hidden');
        toggleText.textContent = 'Показать все';
      });
    }
  });
};

export const showCountriesList = () => {
  if (filters) {
    const breakpointChecker = () => {
      if (breakpointMobile.matches) {
        openList(showListBtnMobile);
      } else {
        openList(showListBtn);
      }
    };
    breakpointMobile.addListener(breakpointChecker);
    breakpointChecker();
  }
};
