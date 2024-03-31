'use strict';

//Инициализация слайдера Swiper (секция партфолио)
const portfolioSlider = new Swiper('.portfolio-slider', {
  // Парметры настройки
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // Навигационные стрелки
  navigation: {
    nextEl: '.slider-control-next',
    prevEl: '.slider-control-prev',
  },
});
