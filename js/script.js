// SWIPER

new Swiper(".servicesSwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".testimonialSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 36,
    },
  },
});

if (window.innerWidth < 992) {
  new Swiper(".servicesTabsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
  });
}