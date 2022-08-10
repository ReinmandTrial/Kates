// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateProduct = {
  init() {
    this.events();
  },

  events() {
    console.log("product");
    // product video Swiper slider
    const SwiperProductVideoSlider = new Swiper(".product-video-slider", {
      loop: true,

      navigation: {
        nextEl: ".product-video-slider-button-next",
        prevEl: ".product-video-slider-button-prev",
      },

      pagination: {
        el: ".product-video-slider-pagination",
        clickable: true,
      },
    });
  },
};

export default TemplateProduct;
