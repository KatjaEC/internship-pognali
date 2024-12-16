import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {toggleModalWindow} from './modules/modal-window/modal-window.js';
import {initSlider} from './modules/destinations-slider/destinations-slider.js';
import {setLevelRange} from './modules/range-slider/range-slider.js';
import {initCategoryToggles} from './modules/search-filter/search-filter.js';
import {showCountriesList} from './modules/countries-filter/countries-filter-show.js';
import {filterCountries} from './modules/countries-filter/countries-filter-init.js';
import {initNavMenu} from './modules/nav-menu/nav-menu.js';
import {renderCards} from './modules/cards-list/cards-show-more.js';
import {initPagination} from './modules/cards-list/cards-list-pagination.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  initNavMenu();
  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initSlider();
    showCountriesList();
    toggleModalWindow();
    setLevelRange();
    renderCards();
    initPagination();
    initModals();
    initCategoryToggles();
    filterCountries();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
