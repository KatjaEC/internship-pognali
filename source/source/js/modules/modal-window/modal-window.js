const openModalBtn = document.querySelector('.add-profile__button');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close-button');

const openModalWindow = () => {
  openModalBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!modalWindow.classList.contains('modal--is-active')) {
      modalWindow.classList.add('modal--is-active');
    } else {
      modalWindow.classList.remove('modal--is-active');
    }
  });
};

const closeModalWindow = () => {
  closeModalBtn.addEventListener('click', () => {
    if (modalWindow.classList.contains('modal--is-active')) {
      modalWindow.classList.remove('modal--is-active');
    }
  });
  modalWindow.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal__overlay')) {
      modalWindow.classList.remove('modal--is-active');
    }
  });
};

export const toggleModalWindow = () => {
  if (modalWindow) {
    openModalWindow();
    closeModalWindow();
  }
};
