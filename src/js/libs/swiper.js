import Swiper from 'swiper/bundle';

//Слайдер из блока heading
const heading__slider = new Swiper('.heading__slider', {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
  },
  speed: 2000,
  noSwiping: true,
  noSwipingClass: '.swiper-slide',
});

//Слайдер из блока food-slider
const food__slider = new Swiper('.food-slider__slider', {
  navigation: {
    nextEl: '.food-slider__slider-button--next',
    prevEl: '.food-slider__slider-button--prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  effect: "fade",
});