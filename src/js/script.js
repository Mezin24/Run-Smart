$(document).ready(function () {
  $('.carousel__inner').slick({
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icons/chevron-left-solid.png" alt="chevron-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icons/chevron-right-solid.png" alt="chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
