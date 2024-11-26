const countriesList = document.querySelector('.filters__countries-wrapper');
const showListBtn = document.querySelector('.btn.filters__options-button');
const hideListBtn = document.querySelector('.btn.filters__button');
const breakpointTablet = window.matchMedia('(min-width:768px)');

export const openList = () => {
  showListBtn.addEventListener('click', () => {
    if (countriesList.classList.contains('filters__countries-wrapper--is-hidden')) {
      countriesList.classList.remove('filters__countries-wrapper--is-hidden');
      showListBtn.classList.remove('filters__options-button--filter-is-hidden');
    } else {
      countriesList.classList.add('filters__countries-wrapper--is-hidden');
      showListBtn.classList.add('filters__options-button--filter-is-hidden');
    }
    if (!countriesList.classList.contains('filters__countries-wrapper--is-hidden')) {
      hideListBtn.addEventListener('click', () => {
        countriesList.classList.add('filters__countries-wrapper--is-hidden');
        showListBtn.classList.add('filters__options-button--filter-is-hidden');
      });
    }
  });
};


export const showCountriesList = () => {
  if (countriesList) {
    const breakpointChecker = () => {
      if (breakpointTablet.matches) {
        openList();
      }
    };
    breakpointTablet.addListener(breakpointChecker);
    breakpointChecker();
  }
};
