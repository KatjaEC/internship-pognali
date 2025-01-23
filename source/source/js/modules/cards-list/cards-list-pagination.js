import {CARDS_TO_SHOW} from '../constants.js';

const paginationList = document.querySelector('.catalog__pagination-list');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

const disableButton = (button) => {
  button.classList.add('catalog__navigation-button--is-inactive');
  button.removeAttribute('href');
};

const enableButton = (button) => {
  button.classList.remove('catalog__navigation-button--is-inactive');
  button.setAttribute('href', '#');
};

const appendPageNumber = (index) => {
  const pageNumberWrapper = document.createElement('li');
  const pageNumber = document.createElement('a');
  pageNumberWrapper.className = 'catalog__pagination-item';
  pageNumber.className = 'catalog__pagination-link';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('href', '#');
  pageNumber.setAttribute('data-page-number', index);
  pageNumber.setAttribute('aria-label', 'Страница ' + index + '.');
  pageNumberWrapper.append(pageNumber);
  paginationList.append(pageNumberWrapper);
};

export const initPagination = () => {
  if (paginationList) {
    const paginatedList = document.getElementById('catalog-paginated-list');
    const listItems = paginatedList.querySelectorAll('.catalog__cards-item');
    const pageCount = Math.ceil(listItems.length / CARDS_TO_SHOW);
    let currentPage = 1;
    const setNavButtonsStatus = () => {
      if (currentPage === 1) {
        disableButton(prevButton);
      } else {
        enableButton(prevButton);
      }
      if (pageCount === currentPage) {
        disableButton(nextButton);
      } else {
        enableButton(nextButton);
      }
    };
    const setActivePageClass = () => {
      document.querySelectorAll('.catalog__pagination-link').forEach((button) => {
        button.classList.remove('catalog__pagination-link--is-active');
        const pageIndex = Number(button.getAttribute('data-page-number'));
        if (pageIndex === currentPage) {
          button.classList.add('catalog__pagination-link--is-active');
        }
      });
    };
    const getPaginationNumbers = () => {
      for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
      }
    };
    const setCurrentPage = (pageNumber) => {
      currentPage = pageNumber;
      setActivePageClass();
      setNavButtonsStatus();
      const rangeStart = (pageNumber - 1) * CARDS_TO_SHOW;
      const rangeEnd = pageNumber * CARDS_TO_SHOW;
      listItems.forEach((item, index) => {
        item.classList.add('catalog__cards-item--is-hidden');
        if (index >= rangeStart && index < rangeEnd) {
          item.classList.remove('catalog__cards-item--is-hidden');
        }
      });
    };
    getPaginationNumbers();
    setCurrentPage(1);
    setNavButtonsStatus();
    setActivePageClass();
    prevButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      setCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      setCurrentPage(currentPage + 1);
    });
    document.querySelectorAll('.catalog__pagination-link').forEach((button) => {
      const pageIndex = Number(button.getAttribute('data-page-number'));
      if (pageIndex) {
        button.addEventListener('click', (evt) => {
          evt.preventDefault();
          setCurrentPage(pageIndex);
        });
      }
    });
  }
};
