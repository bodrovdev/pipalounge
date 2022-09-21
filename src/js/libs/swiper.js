import Swiper from 'swiper/bundle';

//Слайдер из блока heading
const heading__slider = new Swiper('.heading__slider', {
  loop: true,
  effect: "fade",
  speed: 2000,
  noSwiping: true,
  noSwipingClass: '.swiper-slide',
  autoplay: {
    delay: 5000,
  },
});

//Слайдер из блока food-slider
const food__slider = new Swiper('.food-slider__slider', {
  loop: true,
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.food-slider__slider-button--next',
    prevEl: '.food-slider__slider-button--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },
});