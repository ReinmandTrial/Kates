// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateAbout = {
  init() {
    this.events();
  },

  events() {
    var years = ["1997", "2002", "2004", "2009", "2012", "2015", "2017", "2019", "2020", "2022"];

    // about photo Swiper slider
    const SwiperAboutPhotoSlider = new Swiper(".about-photo-slider", {
      loop: true,
      
      // If we need pagination
      pagination: {
        el: ".about-photo-slider-pagination",
        type: "fraction",
      },

      navigation: {
        nextEl: ".about-photo-slider-button-next",
        prevEl: ".about-photo-slider-button-prev",
      },
    });

    // about timeline Swiper slider
    const SwiperAboutTimelineSlider = new Swiper(".about-timeline-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      
      // If we need pagination
      pagination: {
        el: ".about-timeline-slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + years[index] + "</span>";
        },
      },

      navigation: {
        nextEl: ".about-timeline-slider-button-next",
        prevEl: ".about-timeline-slider-button-prev",
      },
    });
  },
};

export default TemplateAbout;
