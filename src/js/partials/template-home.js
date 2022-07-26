// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateHome = {
  init() {
    this.events();
  },

  events() {
    // homepage top Swiper slider
    const SwiperMainSlider = new Swiper(".main-slider", {
      loop: true,
      speed: 500,
      autoplay: {
        delay: 6000,
      },

      pagination: {
        el: ".main-slider-pagination",
        clickable: true,
      },
    });

    // products Swiper slider
    const SwiperProductSlider = new Swiper(".product-slider", {
      slidesPerView: "auto",
      spaceBetween: 8,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
          allowTouchMove: false,
          preventClicksPropagation: false,
          preventClicks: false,
        },
      },

      navigation: {
        nextEl: ".product-slider-button-next",
        prevEl: ".product-slider-button-prev",
      },

      pagination: {
        el: ".product-slider-pagination",
        clickable: true,
      },
    });
  },
};

export default TemplateHome;
