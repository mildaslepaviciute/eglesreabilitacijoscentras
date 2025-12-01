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
  slidesPerView: 1.5,
  spaceBetween: 36,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
  },
});


let swiper;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 992 && !swiper) {
      swiper = new Swiper(".servicesTabsSwiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
      });
  }

  if (screenWidth >= 992 && swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
  }
}

initSwiper();
window.addEventListener("resize", initSwiper);