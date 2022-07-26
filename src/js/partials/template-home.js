// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateHome = {
  init() {
    this.events();
  },

  events() {
    // header burger
    let burgerMenu = document.getElementById("burger");
    let overlay = document.getElementById("menu");
    burgerMenu.addEventListener("click", function () {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
      document.body.classList.toggle("menu-opened");
    });

    // private or company tabs in header
    let privateTabSelector = document.getElementsByClassName("private-tab-selector")[0];
    let companyTabSelector = document.getElementsByClassName("company-tab-selector")[0];
    let privateTabContent = document.getElementsByClassName("private-tab-content")[0];
    let companyTabContent = document.getElementsByClassName("company-tab-content")[0];
    privateTabSelector.addEventListener("click", function () {
      this.classList.add("active");
      privateTabContent.classList.add("active");
      companyTabSelector.classList.remove("active");
      companyTabContent.classList.remove("active");
    });
    companyTabSelector.addEventListener("click", function () {
      this.classList.add("active");
      companyTabContent.classList.add("active");
      privateTabSelector.classList.remove("active");
      privateTabContent.classList.remove("active");
    });

    // making the mobile header, first checking the screen size
    if (window.screen.width <= 900) {
      let topHeaderTabs = document.getElementsByClassName("top-header-list-tabs")[0];
      let topHeaderTabsContent = document.getElementsByClassName("main-header-links")[0];
      let topHeaderLinks1 = document.querySelectorAll(".top-header-list-links")[0];
      let topHeaderLinks2 = document.querySelectorAll(".top-header-list-links")[1];

      // new containers
      let topHeaderTabsMobile = document.getElementsByClassName("main-header-mobile-tabs")[0];
      let topHeaderTabsMobileContent = document.getElementsByClassName("main-header-mobile-tabs-content")[0];
      let topHeaderMobileLinks = document.getElementsByClassName("main-header-mobile-links")[0];

      // moving the desktop elements to new containers
      topHeaderTabsMobile.appendChild(topHeaderTabs);
      topHeaderTabsMobileContent.appendChild(topHeaderTabsContent);
      topHeaderMobileLinks.appendChild(topHeaderLinks1);
      topHeaderMobileLinks.appendChild(topHeaderLinks2);
    }

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
        800: {
          slidesPerView: 3,
        },
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
