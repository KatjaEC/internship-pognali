import noUiSlider from 'nouislider';

const levelRange = document.querySelector('.catalog__range-bar');
const levelInputMin = document.getElementById('level-min-input');
const levelInputMax = document.getElementById('level-max-input');

const RANGE_DEFAULT_MIN = 0;
const RANGE_DEFAULT_MAX = 100;

const initLevelRange = () => {
  noUiSlider.create(levelRange, {
    start: [30, 100],
    connect: true,
    step: 1,
    range: {
      'min': RANGE_DEFAULT_MIN,
      'max': RANGE_DEFAULT_MAX,
    },
    format: {
      to(value) {
        return value.toFixed(0);
      },
      from(value) {
        return parseInt(value, 10);
      },
    },
  });

  levelRange.noUiSlider.on('update', (values, handle) => {
    if (handle) {
      levelInputMax.value = values[handle];
    } else {
      levelInputMin.value = values[handle];
    }
  });

  levelInputMin.addEventListener('change', function () {
    levelRange.noUiSlider.set([this.value, null]);
  });

  levelInputMax.addEventListener('change', function () {
    levelRange.noUiSlider.set([null, this.value]);
  });
};

export const setLevelRange = () => {
  if (levelRange) {
    initLevelRange();
  }
};
