const breakpointMobile = window.matchMedia('(max-width:767px)');

const setNewButtonPosition = () => {
  const buttonWrapper = document.querySelector('.filters__button-wrapper');
  const activeLiItem = document.querySelector('.filters__countries-item--is-active');
  const countriesList = activeLiItem.querySelector('.filters__countries-group');
  const listHeight = countriesList.getBoundingClientRect().height;
  const buttonHeight = buttonWrapper.getBoundingClientRect().height;
  const newTopPosition = `${listHeight - buttonHeight - 28}px`;
  buttonWrapper.style.bottom = 'auto';
  buttonWrapper.style.top = newTopPosition;
};

const setNewPaddingTop = () => {
  const activeLiItem = document.querySelector('.filters__countries-item--is-active');
  const countriesList = activeLiItem.querySelector('.filters__countries-group');
  const lettersList = document.querySelector('.filters__countries-list');
  const lettersListHeight = lettersList.getBoundingClientRect().height;
  const newCountriesListPaddingTop = `${lettersListHeight + 15}px`;
  countriesList.style.paddingTop = newCountriesListPaddingTop;
};

export const setNewStyles = () => {
  const breakpointChecker = () => {
    if (breakpointMobile.matches) {
      setNewPaddingTop();
      setNewButtonPosition();
    }
  };
  breakpointMobile.addListener(breakpointChecker);
  breakpointChecker();
};
