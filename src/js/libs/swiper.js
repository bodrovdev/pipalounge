import Swiper from 'swiper/bundle';

//Слайдер из блока heading
const heading__slider = new Swiper('.heading__slider', {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
  noSwiping: true,
  noSwipingClass: '.swiper-slide',
});