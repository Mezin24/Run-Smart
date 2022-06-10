'use strict';

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
