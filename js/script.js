// SWIPER

var swiper = new Swiper(".servicesSwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 36,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});