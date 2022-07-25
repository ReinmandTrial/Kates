// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateHome = {
  init() {
    this.events();
  },

  events() {
    // header burger
    var burgerMenu = document.getElementById("burger");
    var overlay = document.getElementById("menu");
    burgerMenu.addEventListener("click", function () {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });

    // homepage top Swiper slider
    const SwiperMainSlider = new Swiper(".main-slider", {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: ".main-slider-pagination",
        clickable: true,
      },
    });

    // products Swiper slider
    const SwiperProductSlider = new Swiper(".product-slider", {
      // Optional parameters
      slidesPerView: "auto",
      spaceBetween: 8,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: ".product-slider-button-next",
        prevEl: ".product-slider-button-prev",
      },

      // If we need pagination
      pagination: {
        el: ".product-slider-pagination",
        clickable: true,
      },
    });
  },
};

export default TemplateHome;
