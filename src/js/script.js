'use strict';

//////////// SLIDER
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 1,
  autoplay: true,
  nav: true,
  autoplayButtonOutput: false,
  controls: false,
  speed: 1000,
  responsive: {
    800: {
      nav: false,
    },
  },
});

document.getElementById('prev').addEventListener('click', () => {
  slider.goTo('prev');
});
document.getElementById('next').addEventListener('click', () => {
  slider.goTo('next');
});

//////////// TABS
function toggleTabs(tabSelector, contentSelector) {
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  function removeActiveClass() {
    tabs.forEach((item) => {
      item.classList.remove(`${tabSelector.replace(/\./g, '')}-active`);
    });
    contents.forEach((item) => {
      item.classList.remove(`${contentSelector.replace(/\./g, '')}-active`);
    });
  }

  tabs.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      removeActiveClass();
      tabs[i].classList.add(`${tabSelector.replace(/\./g, '')}-active`);
      contents[i].classList.add(`${contentSelector.replace(/\./g, '')}-active`);
    });
  });
}

function toggleItem(frontSelector, backSelector) {
  const frontBtns = document.querySelectorAll(frontSelector);
  const backBtns = document.querySelectorAll(backSelector);

  function toggleSide(e) {
    e.preventDefault();
    const { target } = e;

    if (target.classList.contains('catalog-item__link')) {
      target.parentNode.classList.remove('catalog-item__body-active');
      target
        .closest('.catalog-item')
        .querySelector('.catalog-item__list')
        .classList.add('catalog-item__list-active');
    } else {
      target.parentNode.classList.remove('catalog-item__list-active');
      target
        .closest('.catalog-item')
        .querySelector('.catalog-item__body')
        .classList.add('catalog-item__body-active');
    }
  }

  frontBtns.forEach((item) => {
    item.addEventListener('click', toggleSide);
  });
  backBtns.forEach((item) => {
    item.addEventListener('click', toggleSide);
  });
}

toggleTabs('.catalog__tab', '.catalog__container');
toggleItem('.catalog-item__link', '.catalog-item__back');
