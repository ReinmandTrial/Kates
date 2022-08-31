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

      on: {
        init: function () {
          swiperSwitch.forEach(function (el) {
            el.classList.remove("active");
            swiperSwitch[0].classList.add("active");
          })
        },
        slideChangeTransitionStart: function () {
          swiperSwitch.forEach(function (el) {
            for (var x = 0; x < swiperSwitch.length; x++) {
              el.classList.remove("active");
              swiperSwitch[SwiperAboutTimelineSlider.realIndex].classList.add("active");
            }
          })
        }
      },
    });

    function reveal() {
      const counters = document.querySelectorAll('.about-features-item-number');
      const speed = 3000;
      for (let i = 0; i < counters.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = counters[i].getBoundingClientRect().top;
        let elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
          counters.forEach(counter => {
            const animate = () => {
              const value = +counter.getAttribute('count');
              const data = +counter.innerText;
      
              const time = value / speed;
              if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 5);
              } else {
                counter.innerText = value;
              }
            }
      
            animate();
          });
        }
      }

      // let reveals = document.querySelectorAll(".fadeInUp");
      // for (let i = 0; i < reveals.length; i++) {
      //   let windowHeight = window.innerHeight;
      //   let elementTop = reveals[i].getBoundingClientRect().top;
      //   let elementVisible = 50;

      //   if (elementTop < windowHeight - elementVisible) {
      //     reveals[i].classList.add("animate__animated", "animate__fadeInUp");
      //   }
      // }
    }
    window.addEventListener("scroll", reveal);

    
    // const counters = document.querySelectorAll('.about-features-item-number');
    // const speed = 200;

    // counters.forEach(counter => {
    //   const animate = () => {
    //     const value = +counter.getAttribute('count');
    //     const data = +counter.innerText;

    //     const time = value / speed;
    //     if (data < value) {
    //       counter.innerText = Math.ceil(data + time);
    //       setTimeout(animate, 1);
    //     } else {
    //       counter.innerText = value;
    //     }
    //   }

    //   animate();
    // });

  },
};

export default TemplateAbout;
