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
      e.preventDefault();
      removeActiveClass();
      tabs[i].classList.add(`${tabSelector.replace(/\./g, '')}-active`);
      contents[i].classList.add(`${contentSelector.replace(/\./g, '')}-active`);
    });
  });
}

toggleTabs('.catalog__tab', '.catalog__container');
