// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateProduct = {
  init() {
    this.events();
  },

  events() {
    // product video Swiper slider
    const SwiperProductInfoSlider = new Swiper(".product-info-slider", {
      slidesPerView: "auto",
      spaceBetween: 8,
      clickable: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      },

      navigation: {
        nextEl: ".product-info-slider-button-next",
        prevEl: ".product-info-slider-button-prev",
      },

      pagination: {
        el: ".product-info-slider-pagination",
      },
    });

    // product video Swiper slider
    const SwiperProductVideoSlider = new Swiper(".product-video-slider", {
      loop: true,

      navigation: {
        nextEl: ".product-video-slider-button-next",
        prevEl: ".product-video-slider-button-prev",
      },

      pagination: {
        el: ".product-video-slider-pagination",
        type: "fraction",
      },
    });

    // product similar Swiper slider
    const SwiperProductSimilarSlider = new Swiper(".product-similar-slider", {
      loop: true,
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
        nextEl: ".product-similar-slider-button-next",
        prevEl: ".product-similar-slider-button-prev",
      },

      pagination: {
        el: ".product-similar-slider-pagination",
      },
    });

    // tabbed gallery on top
    const currentImg = document.querySelector(".product-info-gallery-main-item");
    const imgs = document.querySelectorAll(".product-info-gallery-choice-image");
    imgs.forEach((img) => {
      img.addEventListener("click", (e) => {
        currentImg.src = e.target.src;
        imgs.forEach((img) => {
          img.parentElement.classList.remove("chosen");
        });
        img.parentElement.classList.add("chosen");
      });
    });

    // product video
    // document.querySelectorAll(".product-video-play").addEventListener("click", function () {
    //   document.this.nextSibling("vid").play();
    //   document.getElementById("press").style.display = "none";
    // });
    const videoPlayBtns = document.querySelectorAll(".product-video-play");
    videoPlayBtns.forEach((videoPlayBtn) => {
      videoPlayBtn.addEventListener("click", function() {
        videoPlayBtn.nextElementSibling.play();
        videoPlayBtn.style.display = "none"
      });
    });

    // swiper + lightbox
    let swiper;
    window.globals = {};
    const body = document.getElementsByTagName("body")[0];
    const lightboxImages = document.querySelectorAll("[lightbox-toggle] img");
    const initLightbox = lightboxImages.length > 0;
    const destroySwiper = (swiper, timeout) => {
      setTimeout(() => {
        swiper.destroy();
      }, timeout);
    };

    const createLightboxSkeleton = () => {
      // Create skeleton for lightbox
      const lightbox = document.createElement("div");
      const lightboxContainer = document.createElement("div");
      const lightboxClose = document.createElement("div");
      const swiperContainer = document.createElement("div");
      const swiperWrapper = document.createElement("div");
      const swiperBtnNext = document.createElement("div");
      const swiperBtnPrev = document.createElement("div");
      const swiperPagination = document.createElement("div");

      // Add classes
      lightbox.classList.add("c-lightbox");
      lightboxContainer.classList.add("c-lightbox__container");
      lightboxClose.classList.add("c-lightbox__close");
      lightboxClose.setAttribute("tabindex", "0");
      lightboxClose.innerHTML = "X";
      swiperContainer.classList.add("swiper-container");
      swiperWrapper.classList.add("swiper-wrapper");
      swiperBtnNext.classList.add("swiper-button-next");
      swiperBtnPrev.classList.add("swiper-button-prev");
      swiperPagination.classList.add("swiper-pagination");

      // Append created divs
      lightboxContainer.appendChild(lightboxClose);
      swiperContainer.appendChild(swiperWrapper);
      swiperContainer.appendChild(swiperBtnNext);
      swiperContainer.appendChild(swiperBtnPrev);
      swiperContainer.appendChild(swiperPagination);
      lightboxContainer.appendChild(swiperContainer);
      lightbox.appendChild(lightboxContainer);
      body.appendChild(lightbox);

      // Set variables to reference the lightbox
      globals.lightboxRef = document.querySelector(".c-lightbox");
      globals.swiperWrapperRef = document.querySelector(".c-lightbox .swiper-wrapper");
    };

    if (initLightbox) {
      createLightboxSkeleton();

      // The rest of the code will go here
      lightboxImages.forEach(function (el, index) {
        // Add click function to lightbox images
        el.addEventListener("click", imageClick, false);

        function imageClick() {
          // Clear swiper before trying to add to it
          globals.swiperWrapperRef.innerHTML = "";

          // Loop through images with lightbox data attr
          // Create html for lightbox carousel
          lightboxImages.forEach(function (img) {
            // Create clone of current image in loop
            const image = img.cloneNode(true);
            // Create divs
            const slide = document.createElement("div");
            const imageContainer = document.createElement("div");
            // Add classes
            slide.classList.add("swiper-slide");
            imageContainer.classList.add("c-lightbox__image");
            // Append images to the slides, then slides to swiper wrapper
            imageContainer.appendChild(image);
            slide.appendChild(imageContainer);
            globals.swiperWrapperRef.appendChild(slide);
          });

          // Init Swiper
          swiper = new Swiper(".c-lightbox .swiper-container", {
            initialSlide: index,
            loop: true,
            slidesPerView: 1,
            speed: 750,
            spaceBetween: 16,
            watchOverflow: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            zoom: true,
            fadeEffect: {
              crossFade: false,
            },
            keyboard: {
              enabled: true,
              onlyInViewport: true,
            },
            mousewheel: {
              sensitivity: 1,
              forceToAxis: true,
              invert: true,
            },
          });

          // Add the class to open the lightbox
          // Add overflow hidden to the body to prevent scrolling
          globals.lightboxRef.classList.add("open");
          body.classList.add("overflowHidden");
        }
      });

      // Close lightbox on click
      document.addEventListener(
        "click",
        ({ target }) => {
          if (target.matches(".c-lightbox__close")) {
            destroySwiper(swiper, 250);
            globals.lightboxRef.classList.remove("open");
            body.classList.remove("overflowHidden");
          }
        },
        false
      );

      // Close lightbox on escape key press
      document.addEventListener("keydown", ({ key }) => {
        if (key === "Escape") {
          destroySwiper(swiper, 250);
          globals.lightboxRef.classList.remove("open");
          body.classList.remove("overflowHidden");
        }
      });
    }

    // dropdowns
    let productSpecsDropdown = document.querySelectorAll(".product-specs-dropdown-top");
    for (var i = 0; i < productSpecsDropdown.length; i++) {
      productSpecsDropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
      });
    }
  },
};

export default TemplateProduct;
