const Common = {
  init() {
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

    // search open
    document.querySelector(".top-header-list-item-search > span").addEventListener("click", function () {
      document.getElementsByClassName("top-header-list-item-search")[0].classList.toggle("open");
    });
    document.getElementsByClassName("search-field-close")[0].addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementsByClassName("top-header-list-item-search")[0].classList.toggle("open");
    });

    // if header has any active link, needed for styling
    const headerActiveLinks = document.querySelectorAll('.main-header-block-item');
    headerActiveLinks.forEach((headerActiveLink) => {
      if(headerActiveLink.classList.contains("active")) {
        document.getElementsByClassName("main-header-block-list")[0].classList.toggle("has-active-item");
      }
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
    let scrollpos = window.scrollY;
    function add_class_on_scroll() {
      document.body.classList.add("fixed-header");
    }
    function remove_class_on_scroll() {
      document.body.classList.remove("fixed-header");
    }
    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;
      if (scrollpos > 50) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
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

    // info message
    document.getElementsByClassName("info-message-close-button")[0].onclick = function () {
      document.getElementsByClassName("info-message")[0].remove();
    };

    // product favourite item
    const productItemFavs = document.querySelectorAll(".product-block-fav");
    for (const fav of productItemFavs) {
      fav.addEventListener("click", function handleClick() {
        fav.classList.toggle("active");
      });
    }

    // cart popup open & close
    let cartPopup = document.getElementsByClassName("cart-popup")[0];
    let cartPopupOpen = document.getElementsByClassName("cart-open-button")[0];
    let cartPopupClose = document.getElementsByClassName("cart-popup-close")[0];
    cartPopupOpen.addEventListener("click", function () {
      cartPopup.classList.toggle("cart-popup-opened");
    });
    cartPopupClose.addEventListener("click", function () {
      cartPopup.classList.toggle("cart-popup-opened");
    });

    // cart popup remove lines
    let removeCartItems = document.getElementsByClassName("cart-popup-item-remove-button");
    Array.from(removeCartItems).forEach((removeCartItem) => {
      removeCartItem.addEventListener("click", () => {
        removeCartItem.parentNode.remove();
      });
    });

    // cart popup quantity
    let minus_btns = document.querySelectorAll(".cart-popup-item-amount-minus");
    let plus_btns = document.querySelectorAll(".cart-popup-item-amount-plus");
    let qty_inputs = document.querySelectorAll(".cart-popup-item-amount-input");

    plus_btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.previousElementSibling.value++;
      });
    });
    minus_btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.nextElementSibling.value = btn.nextElementSibling.value == 1 ? 1 : btn.nextElementSibling.value - 1;
      });
    });

    // tabs
    function Tabs() {
      var bindAll = function () {
        var menuElements = document.querySelectorAll("[data-tab]");
        for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].addEventListener("click", change, false);
        }
      };

      var clear = function () {
        var menuElements = document.querySelectorAll("[data-tab]");
        for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].classList.remove("active");
          var id = menuElements[i].getAttribute("data-tab");
          document.getElementById(id).classList.remove("active");
        }
      };

      var change = function (e) {
        clear();
        e.target.classList.add("active");
        var id = e.currentTarget.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
      };

      bindAll();
    }

    var connectTabs = new Tabs();

    // Modal
    document.addEventListener("click", function (e) {
      var scrollbar = document.body.clientWidth - window.innerWidth + "px";
      let $target = e.target;
      if ($target.closest('[data-toggle="modal"]')) {
        e.preventDefault();
        $target = $target.closest('[data-toggle="modal"]');
        document.querySelector($target.dataset.target).classList.add("modal-show");
        document.body.classList.toggle("no-scroll");
      } else if ($target.dataset.close === "modal") {
        e.preventDefault();
        $target.closest(".modal").classList.remove("modal-show");
        document.body.classList.toggle("no-scroll");
      }
    });

    setTimeout(function() {
      document.querySelector(".modal").classList.add("modal-show")
    }, 5000);

    // upload file
    const checkUpload = document.querySelector(".input-file");
    if (checkUpload) {
      document.querySelector("html").classList.add("js");
      var fileInput = document.querySelector(".input-file"),
        button = document.querySelector(".input-file-trigger"),
        the_return = document.querySelector(".file-return");

      button.addEventListener("keydown", function (event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          fileInput.focus();
        }
      });
      button.addEventListener("click", function (event) {
        fileInput.focus();
        return false;
      });
      fileInput.addEventListener("change", function (event) {
        the_return.innerHTML = this.value;
      });
    }
  },
};

export default Common;
