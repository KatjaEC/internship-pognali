const navButton = document.querySelector('.header__nav-toggle');
const navMenu = document.querySelector('.header__nav-wrapper');
const header = document.querySelector('.header');
const breakpointTablet = window.matchMedia('(max-width:1023px)');

const openNavMenu = () => {
  navButton.classList.add('header__nav-toggle--is-open');
  navMenu.classList.add('header__nav-wrapper--menu-is-shown');
  header.classList.add('header--menu-is-shown');
  document.body.addEventListener('click', onRandomClick);
};

const closeNavMenu = () => {
  navButton.classList.remove('header__nav-toggle--is-open');
  navMenu.classList.remove('header__nav-wrapper--menu-is-shown');
  header.classList.remove('header--menu-is-shown');
  document.body.removeEventListener('click', onRandomClick);
};

function onRandomClick(evt) {
  if (!evt.target.closest('.header__nav-wrapper') && !evt.target.closest('.header__nav-toggle')) {
    closeNavMenu();
  }
}

const toggleMenuClass = () => {
  navButton.addEventListener('click', () => {
    if (navButton.classList.contains('header__nav-toggle--is-open') && navMenu.classList.contains('header__nav-wrapper--menu-is-shown')) {
      closeNavMenu();
    } else {
      openNavMenu();
    }
  });
};

export const initNavMenu = () => {
  if (navButton) {
    const breakpointChecker = () => {
      if (breakpointTablet.matches) {
        toggleMenuClass();
      }
    };
    breakpointTablet.addListener(breakpointChecker);
    breakpointChecker();
  }
};
