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
    // const fraction = document.getElementById("fraction");
    // const slides = document.querySelectorAll(".swiper-slide");
    // const slideCount = slides.length;
    // fraction.textContent = `1 / ${slideCount}`;

    const swiperSwitch = document.querySelectorAll(".swiper-pagination-custom .swiper-pagination-switch");

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

      pagination: {
        el: ".about-timeline-slider-pagination",
        clickable: true,
        type: "progressbar",
      },

      navigation: {
        nextEl: ".about-timeline-slider-button-next",
        prevEl: ".about-timeline-slider-button-prev",
      },

      // on: {
      //   slideChange: () => {
      //     fraction.textContent = `${SwiperAboutTimelineSlider.realIndex + 1} / ${slideCount}`;
      //   }
      // },

      on: {
        // init: function () {
        //   $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        //   $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
        // },
        // slideChangeTransitionStart: function () {
        //   $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        //   $(".swiper-pagination-custom .swiper-pagination-switch").eq(SwiperAboutTimelineSlider.realIndex).addClass("active");
        // }
        init: function () {
          swiperSwitch.forEach(function (el) {
            el.classList.remove("active");
            swiperSwitch[0].classList.add("active");
          })
        },
        slideChangeTransitionStart: function () {
          swiperSwitch.forEach(function (el) {
            // console.log(SwiperAboutTimelineSlider.realIndex)
            for (var x = 0; x < swiperSwitch.length; x++){
              el.classList.remove("active");
              swiperSwitch[SwiperAboutTimelineSlider.realIndex].classList.add("active");
            }
            // console.log(el(SwiperAboutTimelineSlider.realIndex))
            // this.classList.remove("active");
            // el(SwiperAboutTimelineSlider.realIndex).classList.add("active");
          })
        }
      },
    });

    // document.querySelector(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    //   SwiperAboutTimelineSlider.slideTo(document.querySelector(this).index());
    //   document.querySelector(".swiper-pagination-custom .swiper-pagination-switch").classList.remove("active");
    //   document.querySelector(this).classList.add("active");
    // })
  },
};

export default TemplateAbout;
