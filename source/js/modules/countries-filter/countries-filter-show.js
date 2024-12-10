import {setNewStyles} from './filter-button-position';

const filters = document.querySelector('.filters__options-wrapper');
const showListBtn = document.querySelector('.btn.filters__options-button');
const hideListBtn = document.querySelector('.btn.filters__button');
const showListBtnMobile = document.querySelector('.filters__options-wrapper p');
const breakpointMobile = window.matchMedia('(max-width:767px)');
// const breakpointTablet = window.matchMedia('(max-width:1023px)');
//filters__options-wrapper p

// const openList = () => {
//   const toggleText = showListBtn.querySelector('.filters__options-button-text');
//   showListBtn.addEventListener('click', () => {
//     if (filters.classList.contains('filters__options-wrapper--list-is-hidden')) {
//       filters.classList.remove('filters__options-wrapper--list-is-hidden');
//       toggleText.textContent = 'Свернуть';
//       setNewStyles();
//       // showListBtn.classList.remove('filters__options-button--list-is-hidden');
//     } else {
//       filters.classList.add('filters__options-wrapper--list-is-hidden');
//       toggleText.textContent = 'Показать все';
//       // showListBtn.classList.add('filters__options-button--list-is-hidden');
//     }
//     if (!filters.classList.contains('filters__options-wrapper--list-is-hidden')) {
//       hideListBtn.addEventListener('click', () => {
//         filters.classList.add('filters__options-wrapper--list-is-hidden');
//         toggleText.textContent = 'Показать все';
//         // showListBtn.classList.add('filters__options-button--list-is-hidden');
//       });
//     }
//   });
// }; ///// ORIGINAL

const openList = (button) => {
  const toggleText = showListBtn.querySelector('.filters__options-button-text');
  button.addEventListener('click', () => {
    if (filters.classList.contains('filters__options-wrapper--list-is-hidden')) {
      filters.classList.remove('filters__options-wrapper--list-is-hidden');
      toggleText.textContent = 'Свернуть';
      setNewStyles();
      // showListBtn.classList.remove('filters__options-button--list-is-hidden');
    } else {
      filters.classList.add('filters__options-wrapper--list-is-hidden');
      toggleText.textContent = 'Показать все';
      // showListBtn.classList.add('filters__options-button--list-is-hidden');
    }
    if (!filters.classList.contains('filters__options-wrapper--list-is-hidden')) {
      hideListBtn.addEventListener('click', () => {
        filters.classList.add('filters__options-wrapper--list-is-hidden');
        toggleText.textContent = 'Показать все';
        // showListBtn.classList.add('filters__options-button--list-is-hidden');
      });
    }
  });
};

// const updateToggleText = (filterListStatus) => {
//   const toggleText = showListBtn.querySelector('.filters__options-button-text');
//   if (listShown) {
//     toggleText.textContent = 'Свернуть';
//   }
// };


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
