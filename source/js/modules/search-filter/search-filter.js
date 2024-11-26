const searchFilter = document.querySelector('.catalog__search-form form');

export const initCategoryToggles = () => {
  if (searchFilter) {
    const formGroups = searchFilter.querySelectorAll('fieldset');
    formGroups.forEach((group) => {
      const categoryToggle = group.querySelector('.btn.catalog__form-button');
      const categoryGroup = group.querySelector('.catalog__group-wrapper');
      const categoryGroupLevel = group.querySelector('#range-slider');
      if (categoryGroup) {
        categoryToggle.addEventListener('click', () => {
          if (categoryGroup.classList.contains('catalog__group-wrapper--is-hidden')) {
            categoryGroup.classList.remove('catalog__group-wrapper--is-hidden');
            categoryToggle.classList.add('catalog__form-button--is-pressed');
          } else {
            categoryGroup.classList.add('catalog__group-wrapper--is-hidden');
            categoryToggle.classList.remove('catalog__form-button--is-pressed');
          }
        });
      }
      if (categoryGroupLevel) {
        categoryToggle.addEventListener('click', () => {
          if (categoryGroupLevel.classList.contains('catalog__group-list--is-hidden')) {
            categoryGroupLevel.classList.remove('catalog__group-list--is-hidden');
            categoryToggle.classList.add('catalog__form-button--is-pressed');
          } else {
            categoryGroupLevel.classList.add('catalog__group-list--is-hidden');
            categoryToggle.classList.remove('catalog__form-button--is-pressed');
          }
        });
      }
    });
  }
};
