// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const TemplateHome = {
  init() {
    this.events();
  },

  events() {
    // header burger
    let burgerMenu = document.getElementsByClassName("burger-button")[0];
    let overlay = document.getElementsByClassName("main-header-mobile")[0];
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

    // adding class to body on scroll
    var scrollpos = window.scrollY;
    var header = document.getElementsByClassName("header")[0];
    function add_class_on_scroll() {
      header.classList.add("fixed-header");
    }
    function remove_class_on_scroll() {
      header.classList.remove("fixed-header");
    }
    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;
      if (scrollpos > 50) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
      console.log(scrollpos);
    });

    // select in the header
    const select = document.querySelectorAll(".select-btn");
    const option = document.querySelectorAll(".select-option");
    let index = 1;
    select.forEach((a) => {
      a.addEventListener("click", (b) => {
        const next = b.target.nextElementSibling;
        next.classList.toggle("toggle");
        next.style.zIndex = index++;
      });
    });
    option.forEach((a) => {
      a.addEventListener("click", (b) => {
        b.target.parentElement.classList.remove("toggle");
        const parent = b.target.closest(".select").children[0];
        parent.setAttribute("data-type", b.target.getAttribute("data-type"));
        parent.innerText = b.target.getAttribute("data-type");
      });
    });

    // animations on scroll
    function reveal() {
      let reveals = document.querySelectorAll(".fadeInUp");
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("animate__animated", "animate__fadeInUp");
        }
      }
    }
    window.addEventListener("scroll", reveal);

    // homepage top Swiper slider
    const SwiperMainSlider = new Swiper(".main-slider", {
      // Optional parameters
      loop: true,
      speed: 500,
      autoplay: {
        delay: 6000,
      },

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
