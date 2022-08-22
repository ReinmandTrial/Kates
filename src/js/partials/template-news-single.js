// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateNewsSingle = {
  init() {
    this.events();
  },

  events() {
    // about photo Swiper slider
    const SwiperArticleMoreSlider = new Swiper(".article-more-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },

      navigation: {
        nextEl: ".article-more-slider-button-next",
        prevEl: ".article-more-slider-button-prev",
      },
    });
  },
};

export default TemplateNewsSingle;
