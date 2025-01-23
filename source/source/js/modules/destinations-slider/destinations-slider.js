import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const cardsSlider = document.querySelector('.destinations__slider-wrapper');
const cardsList = document.querySelector('.destinations__slider-list');
const breakpointTablet = window.matchMedia('(min-width:768px)');

const addExtraSlides = (list) => {
  const cards = list.querySelectorAll('.destinations__slider-item');
  if (cards.length > 1 && cards.length < 4) {
    cards.forEach((card) => {
      if (!card.classList.contains('destinations__slider-item--copy')) {
        const newCard = card.cloneNode(true);
        newCard.classList.add('destinations__slider-item--copy');
        list.append(newCard);
      }
    });
  }
};

const addClasses = () => {
  const slider = document.querySelector('.destinations__slider-wrapper');
  const sliderWrapper = document.querySelector('.destinations__slider-list');
  const sliderCards = sliderWrapper.querySelectorAll('.destinations__slider-item');
  slider.classList.add('swiper');
  sliderWrapper.classList.add('swiper-wrapper');
  sliderCards.forEach((card) => {
    card.classList.add('swiper-slide');
  });
};

const removeClasses = () => {
  const slider = document.querySelector('.destinations__slider-wrapper');
  const sliderWrapper = document.querySelector('.destinations__slider-list');
  const sliderCards = sliderWrapper.querySelectorAll('.destinations__slider-item');
  slider.classList.remove('swiper');
  sliderWrapper.classList.remove('swiper-wrapper');
  sliderCards.forEach((card) => {
    card.classList.remove('swiper-slide');
  });
};

export const initSlider = () => {
  if (cardsSlider) {
    const breakpointChecker = () => {
      if (breakpointTablet.matches) {
        addExtraSlides(cardsList);
        addClasses();
        const swiper = new Swiper(cardsSlider, {
          direction: 'vertical',
          slideActiveClass: 'destinations__slider-item--active',
          modules: [Autoplay],
          autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3000,
          },
          autoHeight: true,
          watchSlidesProgress: true,
          observer: true,
          observeParents: true,
          updateOnWindowResize: true,
          initialSlide: 1,
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          loopAddBlankSlides: false,
          loop: true,
          allowTouchMove: true,
        });
        swiper.init();
      } else {
        const clonedCards = cardsList.querySelectorAll('.destinations__slider-item--copy');
        if (clonedCards.length > 0) {
          clonedCards.forEach((card) => {
            card.remove();
          });
        }
        removeClasses();
      }
    };
    breakpointTablet.addListener(breakpointChecker);
    breakpointChecker();
  }
};
