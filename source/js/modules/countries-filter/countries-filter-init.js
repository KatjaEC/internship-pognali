import {setNewStyles} from './filter-button-position';

const filters = document.querySelector('.filters__options-wrapper');
const filterTabsWrapper = document.querySelector('.filters__list');
const inputs = document.querySelectorAll('.filters__list input');
const countries = document.querySelectorAll('.filters__countries-link');
const breakpointTablet = window.matchMedia('(max-width:1023px)');

const checkboxEurope = document.querySelector('.filters__list #europe');
const checkboxAsia = document.querySelector('.filters__list #asia');
const checkboxAmerica = document.querySelector('.filters__list #america');
const checkboxIslands = document.querySelector('.filters__list #islands');

// const setNewListPaddingTop = () => {
//   const activeLiItem = document.querySelector('.filters__countries-item--is-active');
//   const countriesList = activeLiItem.querySelector('.filters__countries-group');
//   const lettersList = document.querySelector('.filters__countries-list');
//   const lettersListHeight = lettersList.getBoundingClientRect().height;
//   const newCountriesListPaddingTop = `${lettersListHeight + 15}px`;
//   countriesList.style.paddingTop = newCountriesListPaddingTop;
//   console.log(lettersListHeight);
// };

const toggleCheckedAttribute = () => {
  filterTabsWrapper.addEventListener('click', () => {
    inputs.forEach((input) => {
      if (input.checked) {
        input.removeAttribute('checked');
      } else {
        input.setAttribute('checked', 'true');
      }
    });
  });
};

const filterByDefault = () => {
  // const checkboxEurope = document.querySelector('#europe');
  if (checkboxEurope.checked) {
    countries.forEach((country) => {
      if (country.dataset.countryCategory !== 'europe' && country.dataset.countryCategory !== 'europe islands' && country.dataset.countryCategory !== 'europe asia' && country.dataset.countryCategory !== 'europe islands asia') {
        country.classList.add('filters__countries-link--is-hidden');
      } else {
        country.classList.remove('filters__countries-link--is-hidden');
      }
    });
  }
};

const hideEmptyGroups = () => {
  const countriesGroup = document.querySelectorAll('.filters__countries-group');
  countriesGroup.forEach((group) => {
    const countriesInGroupTotal = group.querySelectorAll('.filters__countries-link');
    const countriesInGroupHidden = group.querySelectorAll('.filters__countries-link--is-hidden');
    if (countriesInGroupHidden.length && countriesInGroupTotal.length === countriesInGroupHidden.length) {
      group.closest('.filters__countries-item').style.display = 'none';
    } else {
      group.closest('.filters__countries-item').style.display = 'block';
    }
  });
  // setNewHideButtonPosition();
};

const showEurope = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'europe' || country.dataset.countryCategory === 'europe islands' || country.dataset.countryCategory === 'europe asia' || country.dataset.countryCategory === 'europe islands asia') {
      country.classList.remove('filters__countries-link--is-hidden');
    }
  });
};

const showAsia = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'asia' || country.dataset.countryCategory === 'asia islands' || country.dataset.countryCategory === 'europe islands asia' || country.dataset.countryCategory === 'europe asia') {
      country.classList.remove('filters__countries-link--is-hidden');
    }
  });
};

const showAmerica = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'america' || country.dataset.countryCategory === 'america islands') {
      country.classList.remove('filters__countries-link--is-hidden');
    }
  });
};

const showIslands = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'islands' || country.dataset.countryCategory === 'europe islands' || country.dataset.countryCategory === 'asia islands' || country.dataset.countryCategory === 'america islands' || country.dataset.countryCategory === 'europe islands asia') {
      country.classList.remove('filters__countries-link--is-hidden');
    }
  });
};

const hideEurope = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'europe') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxAsia.checked && country.dataset.countryCategory === 'europe asia') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxIslands.checked && country.dataset.countryCategory === 'europe islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxAsia.checked && !checkboxIslands.checked && country.dataset.countryCategory === 'europe islands asia') {
      country.classList.add('filters__countries-link--is-hidden');
    }
  });
};

const hideAsia = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'asia') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxEurope.checked && country.dataset.countryCategory === 'europe asia') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxIslands.checked && country.dataset.countryCategory === 'asia islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxEurope.checked && checkboxIslands.checked && country.dataset.countryCategory === 'europe islands asia') {
      country.classList.add('filters__countries-link--is-hidden');
    }
  });
};

const hideAmerica = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'america') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxIslands.checked && country.dataset.countryCategory === 'america islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
  });
};

const hideIslands = () => {
  countries.forEach((country) => {
    if (country.dataset.countryCategory === 'islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxEurope.checked && country.dataset.countryCategory === 'europe islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxAsia.checked && country.dataset.countryCategory === 'asia islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxAmerica.checked && country.dataset.countryCategory === 'america islands') {
      country.classList.add('filters__countries-link--is-hidden');
    }
    if (checkboxEurope.checked && checkboxAsia.checked && country.dataset.countryCategory === 'europe islands asia') {
      country.classList.add('filters__countries-link--is-hidden');
    }
  });
};

const toggleCheckedClass = () => {
  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      // setNewStyles();
      const checkedCheckboxes = filters.querySelectorAll('[checked="true"]');
      if (checkedCheckboxes.length) {
        if (!input.checked) {
          if (input.id === 'europe') {
            showEurope();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'asia') {
            showAsia();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'america') {
            showAmerica();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'islands') {
            showIslands();
            hideEmptyGroups();
            setNewStyles();
          }
        } else {
          if (input.id === 'europe') {
            hideEurope();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'asia') {
            hideAsia();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'america') {
            hideAmerica();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'islands') {
            hideIslands();
            hideEmptyGroups();
            setNewStyles();
          }
        }
      } else {
        countries.forEach((country) => {
          country.classList.remove('filters__countries-link--is-hidden');
          hideEmptyGroups();
          setNewStyles();
        });
      }
      if (checkedCheckboxes.length === 1) {
        if (!input.checked) {
          if (input.id === 'europe') {
            countries.forEach((country) => {
              country.classList.add('filters__countries-link--is-hidden');
            });
            showEurope();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'asia') {
            countries.forEach((country) => {
              country.classList.add('filters__countries-link--is-hidden');
            });
            showAsia();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'america') {
            countries.forEach((country) => {
              country.classList.add('filters__countries-link--is-hidden');
            });
            showAmerica();
            hideEmptyGroups();
            setNewStyles();
          }
          if (input.id === 'islands') {
            countries.forEach((country) => {
              country.classList.add('filters__countries-link--is-hidden');
            });
            showIslands();
            hideEmptyGroups();
            setNewStyles();
          }
        }
      }
    });
  });
};

const switchActiveLetter = () => {
  const countriesListItem = filters.querySelectorAll('.filters__countries-item');
  countriesListItem.forEach((item) => {
    const countriesListLetter = item.querySelector('p');
    countriesListLetter.addEventListener('click', (evt) => {
      const activeItem = filters.querySelector('.filters__countries-item--is-active');
      if (!evt.target.closest('li').classList.contains('filters__countries-item--is-active')) {
        activeItem.classList.remove('filters__countries-item--is-active');
        evt.target.closest('li').classList.add('filters__countries-item--is-active');
      }
      setNewStyles();
    });
  });
};

export const filterCountries = () => {
  if (filters) {
    const breakpointChecker = () => {
      if (breakpointTablet.matches) {
        // setNewHideButtonPosition();
        filterByDefault();
        hideEmptyGroups();
        toggleCheckedAttribute();
        toggleCheckedClass();
        switchActiveLetter();
      } else {
        filterByDefault();
        hideEmptyGroups();
        toggleCheckedAttribute();
        toggleCheckedClass();
      }
    };
    breakpointTablet.addListener(breakpointChecker);
    breakpointChecker();
  }
};

// setNewListPaddingTop();
// filterByDefault();
// hideEmptyGroups();
// toggleCheckedAttribute();
// toggleCheckedClass();
// switchActiveLetter();
// setNewHideButtonPosition();
